// Optional maintainer check. Secret is received only over hidden stdin.
import {createServer} from 'vite';
process.stdin.setRawMode?.(true);process.stdin.setEncoding('utf8');
process.stderr.write('Google canlı kontrolü için gizli stdin hazır.\n');
let input='';
process.stdin.on('data',async function receive(chunk){
 input+=chunk;if(!/[\r\n]/.test(input))return;
 process.stdin.removeListener('data',receive);process.stdin.setRawMode?.(false);process.stdin.pause();
 const vite=await createServer({configFile:false,server:{middlewareMode:true},appType:'custom'});
 try{
  const {handleProjectIdeas}=await vite.ssrLoadModule('/server/project-ideas.ts');
  const request=new Request('https://example.com/api/project-ideas',{method:'POST',headers:{Origin:'https://example.com','Content-Type':'application/json'},body:JSON.stringify({competition:'general',level:'Ortaokul',theme:'Su ve tarım',technology:'Sensörler',duration:'1–2 ay',budget:'Mevcut sınıf araçları',problem:'Okul bahçesinde sulama suyu israfını azaltmak için temsili ölçümlerle güvenli bir prototip geliştirmek istiyoruz.'})});
  const diagnosticFetch=async(...args)=>{const r=await fetch(...args);if(!r.ok){let code=null;try{code=(await r.clone().json()).error?.status||null}catch{}console.log(JSON.stringify({upstreamHttp:r.status,upstreamStatus:code}));}return r;};
  const model=process.argv[2]||'gemini-3.8-flash';
  const r=await handleProjectIdeas(request,{GEMINI_API_KEY:input.trim(),GEMINI_MODEL:model},diagnosticFetch);const result=await r.json();
  console.log(JSON.stringify({http:r.status,ideaCount:result.ideas?.length||0,error:result.error||null}));
  if(!r.ok)process.exitCode=1;
 }finally{input='';await vite.close()}
});
