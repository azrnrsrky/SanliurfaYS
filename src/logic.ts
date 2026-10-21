import { motivationalQuotes, type Competition } from './data.ts';
export const normalize = (s:string) => s.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i');
export const matches = (query:string,...values:string[]) => normalize(values.join(' ')).includes(normalize(query));
export function selectQuote(){
 let history:number[]=[];
 try{history=JSON.parse(localStorage.getItem('quote-history')||'[]');if(!Array.isArray(history))history=[];history=[...new Set(history.filter(i=>Number.isInteger(i)&&i>=0&&i<motivationalQuotes.length))];}catch{}
 const last=history.at(-1); if(history.length>=motivationalQuotes.length)history=[];
 const candidates=motivationalQuotes.map((_,i)=>i).filter(i=>!history.includes(i)&&i!==last);
 const index=candidates[Math.floor(Math.random()*candidates.length)]??0;
 try{localStorage.setItem('quote-history',JSON.stringify([...history,index]));}catch{}
 return motivationalQuotes[index];
}
export const istanbulDay = (now=new Date()) => new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Istanbul',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
const validDate=(value:string|null):value is string=>!!value&&/^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(Date.parse(value))&&new Date(value).toISOString().slice(0,10)===value;
export function competitionStatus(c:Competition,today=istanbulDay()){
 if(!c.verified||!validDate(c.start)||!validDate(c.end)||c.start>c.end)return {label:'Tarih doğrulanacak',days:null};
 const days=Math.round((Date.parse(c.end+'T00:00:00+03:00')-Date.parse(today+'T00:00:00+03:00'))/86400000);
 return {label:today<c.start?'Yaklaşan':today>c.end?'Tamamlanan':'Başvurusu Açık',days};
}
