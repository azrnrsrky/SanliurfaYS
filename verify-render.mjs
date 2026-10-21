import assert from 'node:assert/strict';
import {createServer} from 'vite';
const values=new Map();
Object.defineProperty(globalThis,'localStorage',{value:{getItem:k=>values.get(k)||null,setItem:(k,v)=>values.set(k,v)},configurable:true});
const server=await createServer({configFile:false,server:{middlewareMode:true},appType:'custom'});
try{
 const React=await import('react');
 const {renderToString}=await import('react-dom/server');
 const {MemoryRouter,Routes,Route}=await import('react-router-dom');
 const render=async(name,path='/',route='*')=>{
  const {default:Page}=await server.ssrLoadModule('/src/views/'+name+'.tsx');
  return renderToString(React.createElement(MemoryRouter,{initialEntries:[path]},React.createElement(Routes,null,React.createElement(Route,{path:route,element:React.createElement(Page)}))));
 };
 const names=['HomePage','DocumentCenter','TrainingCenter','CompetitionCenter','AnnouncementCalendar','TechnologyGuide','TroubleshootingCenter','CoordinatorGuide','UsefulLinks','FAQ','Legislation','Contact','SearchPage','QRPage','Privacy','OfficialPlatform','NotFound'];
 for(const name of names){const html=await render(name);assert.ok(html.length>100, name);assert.ok(!html.includes('type="file"'),name);}
 assert.ok((await render('SearchPage','/arama?q=yazici')).includes('3B Yazıcı'));
 assert.ok((await render('TechnologyGuide','/teknoloji/3b-yazici','/teknoloji/:id')).includes('Adım adım kullanım'));
 assert.ok((await render('TroubleshootingCenter','/sorun-cozme/internet','/sorun-cozme/:id')).includes('Kontrol edebileceğiniz adımlar'));
 assert.ok((await render('AnnouncementDetail','/duyurular/platform-rehberi','/duyurular/:id')).includes('Örnek içerik'));
 assert.ok((await render('TrainingCenter','/egitimler/mahalli-aktif','/egitimler/:id')).includes('MEBBİS’i ziyaret et'));
 const home=await render('HomePage');assert.equal((home.match(/class="module-card"/g)||[]).length,12);
 assert.ok(home.includes('https://yenilikcisinif.eba.gov.tr/'));
 console.log('Doğrulandı: 17 sayfa, 5 arama/detay rotası, 12 ana modül, resmî platform bağlantısı ve dosya yükleme alanı bulunmaması.');
}finally{await server.close()}
