import assert from 'node:assert/strict';
import {createServer} from 'vite';
const vite=await createServer({configFile:false,server:{middlewareMode:true},appType:'custom'});
try{
 const {handleProjectIdeas,validateProjectInput}=await vite.ssrLoadModule('/server/project-ideas.ts');
 const {validIdeas,buildProjectPrompt}=await vite.ssrLoadModule('/src/projectIdeas.ts');
 const input={competition:'general',level:'Ortaokul',theme:'Su ve tarım',technology:'Sensörler',duration:'1–2 ay',budget:'Mevcut sınıf araçları',problem:'Okul bahçesinde sulama suyu israfını azaltmak istiyoruz.'};
 const idea={title:'Deneme fikri',problem:'Bir ihtiyaç.',solution:'Bir yaklaşım.',originality:'Araştırılacak yön.',materials:['Sensör'],steps:['Güvenli bir prototip hazırla.'],evaluation:'Temsili verilerle kontrol.',safety:'Öğretmen gözetimi.'};
 const result={ideas:[idea,idea,idea]},env={GEMINI_API_KEY:'test-only-key'};
 const req=(body=input,headers={})=>new Request('https://example.com/api/project-ideas',{method:'POST',headers:{Origin:'https://example.com','Content-Type':'application/json',...headers},body:JSON.stringify(body)});
 assert.ok(validateProjectInput(input));assert.ok(!validateProjectInput({...input,problem:'x'}));assert.ok(!validateProjectInput({...input,competition:'uydurma'}));assert.ok(!validateProjectInput({...input,level:'x'}));
 assert.ok(validIdeas(result));assert.ok(!validIdeas({ideas:[idea]}));assert.ok(!validIdeas({ideas:[{title:'eksik'},idea,idea]}));
 assert.ok(buildProjectPrompt(input,'Genel proje fikri').includes('şartnamesi sağlanmadı'));
 assert.equal((await handleProjectIdeas(req(),{})).status,503);
 assert.equal((await handleProjectIdeas(req(input,{Origin:'https://bad.example'}),env)).status,403);
 assert.equal((await handleProjectIdeas(req({...input,problem:'x'}),env)).status,400);
 assert.equal((await handleProjectIdeas(req({...input,problem:'a'.repeat(9000)}),env)).status,413);
 let called=0;
 const success=await handleProjectIdeas(req(),env,async(url,options)=>{called++;assert.ok(url.startsWith('https://generativelanguage.googleapis.com/'));assert.equal(options.headers['x-goog-api-key'],'test-only-key');assert.ok(JSON.parse(options.body).generationConfig.responseJsonSchema);return Response.json({candidates:[{finishReason:'STOP',content:{parts:[{text:JSON.stringify(result)}]}}]});});
 assert.equal(success.status,200);assert.equal(success.headers.get('Cache-Control'),'no-store');assert.equal(called,1);assert.ok(validIdeas(await success.json()));
 const unavailable=await handleProjectIdeas(req(),env,async()=>new Response('',{status:429}));assert.equal(unavailable.status,429);
 const blocked=await handleProjectIdeas(req(),env,async()=>Response.json({candidates:[{finishReason:'SAFETY'}]}));assert.equal(blocked.status,422);
 const malformed=await handleProjectIdeas(req(),env,async()=>Response.json({candidates:[{content:{parts:[{text:'invalid json'}]}}]}));assert.equal(malformed.status,502);
 const status=await handleProjectIdeas(new Request('https://example.com/api/project-ideas/status'),env);const statusBody=await status.text();assert.ok(!statusBody.includes('test-only-key'));
 console.log('Doğrulandı: form sınırları, izinli tercihler, JSON şeması, eksik anahtar, farklı kaynak reddi, gövde sınırı, gerçek API sözleşmesi, kota/güvenlik/bozuk yanıt durumları ve anahtarın yanıtta bulunmaması.');
}finally{await vite.close();}
