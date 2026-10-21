import {useEffect,useRef,useState,type FormEvent} from 'react';
import {ArrowRight,Check,Copy,Lightbulb,LoaderCircle,Printer,ShieldCheck,Sparkles,X} from 'lucide-react';
import {competitions} from '../data';
import {buildProjectPrompt,projectBudgets,projectDurations,projectLevels,projectTechnologies,projectThemes,validIdeas,type ProjectInput,type ProjectResponse} from '../projectIdeas';
const initial:ProjectInput={competition:'general',level:'Ortaokul',theme:'Su ve tarım',technology:'Sensörler',duration:'1–2 ay',budget:'Mevcut sınıf araçları',problem:''};
export default function ProjectIdeaStudio({competitionId}:{competitionId?:string}){
 const [form,setForm]=useState<ProjectInput>({...initial,competition:competitionId||'general'});
 const [status,setStatus]=useState<'checking'|'ready'|'unavailable'>('checking');
 const [busy,setBusy]=useState(false),[error,setError]=useState(''),[result,setResult]=useState<ProjectResponse|null>(null),[copied,setCopied]=useState(false),[draft,setDraft]=useState('');
 const controller=useRef<AbortController|null>(null),resultRef=useRef<HTMLDivElement>(null);
 useEffect(()=>{setForm(f=>({...f,competition:competitionId||'general'}));setResult(null);setDraft('');},[competitionId]);
 useEffect(()=>{const abort=new AbortController();fetch('/api/project-ideas/status',{signal:abort.signal}).then(async r=>r.ok?await r.json() as {available?:boolean}:null).then(v=>setStatus(v?.available?'ready':'unavailable')).catch(()=>{if(!abort.signal.aborted)setStatus('unavailable')});return()=>{abort.abort();controller.current?.abort()};},[]);
 const update=(key:keyof ProjectInput,value:string)=>{setForm(f=>({...f,[key]:value}));setDraft('');setError('')};
 const generate=async(e:FormEvent)=>{
  e.preventDefault();if(busy||status!=='ready')return;
  setBusy(true);setError('');setResult(null);setDraft('');setCopied(false);
  const abort=new AbortController();controller.current=abort;
  const timeout=window.setTimeout(()=>abort.abort(),55000);
  try{const r=await fetch('/api/project-ideas',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form),signal:abort.signal});const data=await r.json();if(!r.ok)throw new Error((data as {error?:string})?.error||'Öneriler oluşturulamadı.');if(!validIdeas(data))throw new Error('Yanıt beklenen biçimde gelmedi. Tekrar deneyin.');setResult(data);window.setTimeout(()=>resultRef.current?.focus(),0);}
  catch(e){setError(abort.signal.aborted?'İstek durduruldu. Tercihlerinizi koruyarak yeniden deneyebilirsiniz.':e instanceof Error?e.message:'Bağlantı kurulamadı. Tekrar deneyin.');}
  finally{window.clearTimeout(timeout);setBusy(false);controller.current=null;}
 };
 const textResult=result?.ideas.map((i,n)=>`${n+1}. ${i.title}\nProblem: ${i.problem}\nÇözüm: ${i.solution}\nÖzgün yön araştırması: ${i.originality}\nMalzemeler: ${i.materials.join(', ')}\nAdımlar:\n${i.steps.map((s,n)=>`${n+1}. ${s}`).join('\n')}\nDeğerlendirme: ${i.evaluation}\nGüvenli çalışma: ${i.safety}`).join('\n\n');
 const copy=async(text:string)=>{try{await navigator.clipboard.writeText(text);setCopied(true);}catch{setError('Otomatik kopyalama kullanılamıyor. Görünen metni seçip kopyalayabilirsiniz.');}};
 return <section className="idea-studio" id="proje-fikri" aria-labelledby="idea-heading">
  <div className="idea-intro no-print"><div className="idea-emblem"><Lightbulb size={30}/></div><div><span className="eyebrow">FİKİRDEN PROJEYE</span><h2 id="idea-heading">Proje Fikri Atölyesi</h2><p>Bir ihtiyaç seçin. Sınıfınızın imkânlarıyla geliştirebileceğiniz üç farklı başlangıç fikri keşfedin.</p></div><span className="idea-ai-tag"><Sparkles size={14}/> Google Gemini</span></div>
  <div className="idea-layout">
   <form className="idea-form no-print" onSubmit={generate}>
    <div className="idea-field-grid">
     <label>Yarışma / proje yönü<select disabled={busy} value={form.competition} onChange={e=>update('competition',e.target.value)}><option value="general">Genel proje fikri</option>{competitions.map(c=><option key={c.id} value={c.id}>{c.title}</option>)}</select></label>
     <label>Eğitim kademesi<select disabled={busy} value={form.level} onChange={e=>update('level',e.target.value)}>{projectLevels.map(v=><option key={v}>{v}</option>)}</select></label>
     <label>Proje odağı<select disabled={busy} value={form.theme} onChange={e=>update('theme',e.target.value)}>{projectThemes.map(v=><option key={v}>{v}</option>)}</select></label>
     <label>Kullanılabilecek teknoloji<select disabled={busy} value={form.technology} onChange={e=>update('technology',e.target.value)}>{projectTechnologies.map(v=><option key={v}>{v}</option>)}</select></label>
     <label>Ayırabileceğiniz süre<select disabled={busy} value={form.duration} onChange={e=>update('duration',e.target.value)}>{projectDurations.map(v=><option key={v}>{v}</option>)}</select></label>
     <label>Malzeme yaklaşımı<select disabled={busy} value={form.budget} onChange={e=>update('budget',e.target.value)}>{projectBudgets.map(v=><option key={v}>{v}</option>)}</select></label>
    </div>
    <label className="idea-problem">Hangi ihtiyaca çözüm arıyorsunuz?<textarea disabled={busy} required minLength={15} maxLength={600} rows={3} value={form.problem} onChange={e=>update('problem',e.target.value)} placeholder="Örneğin: Okul bahçesindeki bitkiler için su israfını azaltan, düşük maliyetli bir sulama prototipi geliştirmek istiyoruz." aria-describedby="idea-privacy"/><span className="idea-counter">{form.problem.length} / 600</span></label>
    <p id="idea-privacy" className="idea-disclosure"><ShieldCheck size={16}/><span>İsim, iletişim bilgisi veya öğrenci bilgisi yazmayın. Fikir üretildiğinde bu formdaki tercihler ve problem açıklaması Google Gemini’ye gönderilir. Uygulama bunları kaydetmez. <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">Google’ın veri koşulları ↗</a></span></p>
    <div className="idea-buttons"><button className="button primary" disabled={busy||status!=='ready'} type="submit">{busy?<><LoaderCircle className="spin" size={17}/> Fikirler geliştiriliyor…</>:<><Sparkles size={17}/> Yapay zekâ ile fikir üret <ArrowRight size={17}/></>}</button>{busy&&<button type="button" className="button secondary" onClick={()=>controller.current?.abort()}><X size={15}/> Durdur</button>}</div>
    {status==='checking'&&<p role="status" className="idea-status">Yapay zekâ bağlantısı kontrol ediliyor…</p>}
    {status==='unavailable'&&<p role="status" className="idea-status">Yapay zekâ bağlantısı şu an kullanılamıyor. Aşağıdan çalışma istemini hazırlayıp kopyalayabilirsiniz.</p>}
    {error&&<p role="alert" className="idea-error">{error}</p>}
   </form>
   <aside className="idea-side no-print"><span className="eyebrow">İYİ BİR BAŞLANGIÇ İÇİN</span><h3>Küçük bir problem,<br/>güçlü bir proje.</h3><ol><li>Gözlemlediğiniz somut ihtiyacı anlatın.</li><li>Elinizdeki araçları ve zamanı seçin.</li><li>Fikirleri tartışın, deneyerek geliştirin.</li></ol><div className="idea-example"><span>Şanlıurfa’dan ilham alın</span><p>Su verimliliği, tarım, erişilebilirlik veya kültürel miras… Yerel bir ihtiyaca yeni bir açıdan bakın.</p></div><p className="idea-caveat">Öneriler resmî başvuru veya uygunluk onayı değildir. Güncel şartnameyi, güvenliği ve özgünlüğü öğretmen değerlendirmelidir.</p><button className="text-link" disabled={busy||form.problem.trim().length<15} onClick={()=>{setDraft(buildProjectPrompt(form,competitions.find(c=>c.id===form.competition)?.title||'Genel proje fikri'));setCopied(false)}}>Çalışma istemini hazırla <ArrowRight size={15}/></button></aside>
  </div>
  {draft&&<div className="idea-prompt no-print"><div><h3>Yapay zekâ çalışma istemi</h3><button className="button secondary" onClick={()=>copy(draft)}>{copied?<Check size={15}/>:<Copy size={15}/>} {copied?'Kopyalandı':'İstemi kopyala'}</button></div><textarea readOnly aria-label="Hazırlanan proje çalışma istemi" value={draft} rows={8}/></div>}
  {result&&<div className="idea-results" ref={resultRef} tabIndex={-1}><div className="idea-results-heading"><div><span className="eyebrow">GELİŞTİRMEK İÇİN BİR BAŞLANGIÇ</span><h2>Üç fikir, yeni olasılıklar.</h2><p>Google Gemini tarafından oluşturulan öneriler</p></div><div className="idea-buttons no-print"><button className="button secondary" onClick={()=>copy(textResult||'')}>{copied?<Check size={16}/>:<Copy size={16}/>} {copied?'Kopyalandı':'Kopyala'}</button><button className="button secondary" onClick={()=>window.print()}><Printer size={16}/> Yazdır</button><button className="icon-button" aria-label="Önerileri temizle" onClick={()=>setResult(null)}><X size={17}/></button></div></div><div className="idea-result-grid">{result.ideas.map((idea,i)=><article className="idea-result" key={i}><span className="idea-number">0{i+1}</span><h3>{idea.title}</h3><h4>Problem</h4><p>{idea.problem}</p><h4>Çözüm yaklaşımı</h4><p>{idea.solution}</p><h4>Özgün yönü araştırın</h4><p>{idea.originality}</p><h4>Temel malzemeler</h4><ul>{idea.materials.map((s,n)=><li key={n}>{s}</li>)}</ul><h4>Nasıl başlayabiliriz?</h4><ol>{idea.steps.map((s,n)=><li key={n}>{s}</li>)}</ol><h4>Başarıyı değerlendirme</h4><p>{idea.evaluation}</p><div className="idea-safety"><ShieldCheck size={16}/><p>{idea.safety}</p></div></article>)}</div><p className="idea-result-note">Yapay zekâ yanılabilir. Şartnameye uygunluğu, maliyeti, teknik yapılabilirliği ve özgünlüğü resmî kaynaklar ve üretici kılavuzlarıyla kontrol edin. Bu fikirler başvuru dosyası yerine geçmez.</p></div>}
 </section>;
}
