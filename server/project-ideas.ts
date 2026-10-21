import {competitions} from '../src/data';
import {buildProjectPrompt,ideaSchema,projectBudgets,projectDurations,projectLevels,projectTechnologies,projectThemes,validIdeas,type ProjectInput} from '../src/projectIdeas';
export type AIEnv={GEMINI_API_KEY?:string;GEMINI_MODEL?:string};
const json=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
let inflight=0,windowStart=0,requests=0;
export function validateProjectInput(v:unknown):v is ProjectInput{
 if(!v||typeof v!=='object')return false;const p=v as ProjectInput;
 return (p.competition==='general'||competitions.some(c=>c.id===p.competition))&&projectLevels.some(x=>x===p.level)&&projectThemes.some(x=>x===p.theme)&&projectTechnologies.some(x=>x===p.technology)&&projectDurations.some(x=>x===p.duration)&&projectBudgets.some(x=>x===p.budget)&&typeof p.problem==='string'&&p.problem.trim().length>=15&&p.problem.length<=600;
}
export async function handleProjectIdeas(request:Request,env:AIEnv,fetcher:typeof fetch=fetch){
 const pathname=new URL(request.url).pathname;
 if(pathname==='/api/project-ideas/status')return request.method==='GET'?json({available:!!env.GEMINI_API_KEY,provider:'Google Gemini'}):json({error:'Bu işlem desteklenmiyor.'},405);
 if(request.method!=='POST')return json({error:'Bu işlem desteklenmiyor.'},405);
 const origin=request.headers.get('Origin');
 if(!origin||origin!==new URL(request.url).origin)return json({error:'İstek kaynağı doğrulanamadı.'},403);
 if(!request.headers.get('Content-Type')?.startsWith('application/json'))return json({error:'Geçerli bir proje isteği gönderin.'},415);
 if(!env.GEMINI_API_KEY)return json({error:'Google Gemini bağlantısı henüz yapılandırılmadı.'},503);
 const now=Date.now();if(now-windowStart>60000){windowStart=now;requests=0;}
 // Anonymous, in-memory protection per worker instance. No user/IP identifiers or prompt logs.
 if(inflight>=2||requests>=20)return json({error:'Şu an çok sayıda istek var. Bir dakika sonra tekrar deneyin.'},429);
 let input:ProjectInput;
 try{
  const reader=request.body?.getReader();if(!reader)return json({error:'Proje tercihleri eksik.'},400);
  let text='',size=0;const decoder=new TextDecoder();
  while(true){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>8000){await reader.cancel();return json({error:'İstek çok uzun. Problem açıklamasını kısaltın.'},413);}text+=decoder.decode(value,{stream:true});}
  const parsed=JSON.parse(text+decoder.decode());if(!validateProjectInput(parsed))return json({error:'Tüm tercihleri seçin ve problemi 15–600 karakterle açıklayın.'},400);
  input={competition:parsed.competition,level:parsed.level,theme:parsed.theme,technology:parsed.technology,duration:parsed.duration,budget:parsed.budget,problem:parsed.problem.trim()};
 }catch{return json({error:'Proje isteği okunamadı. Formu kontrol edip tekrar deneyin.'},400);}
 const model=env.GEMINI_MODEL||'gemini-3.8-flash';
 if(!/^gemini-[a-z0-9.-]+$/.test(model))return json({error:'Yapay zekâ model ayarı kontrol edilmeli.'},503);
 inflight++;requests++;
 try{
  const response=await fetcher(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':env.GEMINI_API_KEY},body:JSON.stringify({contents:[{role:'user',parts:[{text:buildProjectPrompt(input,competitions.find(c=>c.id===input.competition)?.title||'Genel proje fikri')}]}],generationConfig:{responseMimeType:'application/json',responseJsonSchema:ideaSchema,maxOutputTokens:6500,temperature:0.8}}),signal:AbortSignal.timeout(45000)});
  if(!response.ok){if(response.status===429)return json({error:'Google Gemini kotası veya hız sınırı nedeniyle şu anda fikir üretilemiyor. Daha sonra tekrar deneyin.'},429);if([400,401,403,404].includes(response.status))return json({error:'Google bağlantısı bu isteği kabul etmedi. Anahtar, model ve erişim ayarlarının kontrol edilmesi gerekiyor.'},502);return json({error:'Yapay zekâ servisine şu an ulaşılamıyor. Biraz sonra tekrar deneyin.'},502);}
  const data=await response.json() as {candidates?:{finishReason?:string;content?:{parts?:{text?:string;thought?:boolean}[]}}[]};
  const candidate=data.candidates?.[0];if(candidate?.finishReason&&candidate.finishReason!=='STOP')return json({error:'Bu açıklama için tamamlanmış bir öneri üretilemedi. Problemi farklı ifade ederek tekrar deneyin.'},422);
  const text=candidate?.content?.parts?.filter(p=>!p.thought).map(p=>p.text||'').join('')||'';
  let result:unknown;try{result=JSON.parse(text)}catch{return json({error:'Öneriler beklenen biçimde gelmedi. Tekrar deneyin.'},502);}
  if(!validIdeas(result))return json({error:'Öneriler eksik geldi. Yeniden oluşturmayı deneyin.'},502);
  return json(result);
 }catch{return json({error:'Bağlantı kesildi veya yanıt süresi aşıldı. Biraz sonra tekrar deneyin.'},504);}finally{inflight--;}
}
