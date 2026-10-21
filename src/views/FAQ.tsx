import React, { useEffect, useState, type ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { faqs } from '../data';
import { matches } from '../logic';
import { Empty, SectionTitle, LocalSearch } from '../components/ui';

export default function FAQ(){const {id}=useParams();const [q,setQ]=useState('');const items=faqs.filter(f=>(!id||f.id===id)&&matches(q,f.title,f.description));return <><SectionTitle title="Sık Sorulan Sorular" description="Merak ettikleriniz için kısa yanıtlar, doğru kaynaklara kolay erişim."/><LocalSearch value={q} onChange={setQ} label="Sorularda ve yanıtlarda ara"/><div className="faq-list">{items.map(f=><details className="faq-item" key={f.id} open={id===f.id||undefined}><summary>{f.title}<ChevronRight size={19}/></summary><p>{f.description}</p></details>)}</div>{!items.length&&<Empty title="Sorunuzla eşleşen bir yanıt bulunamadı" text="Farklı bir sözcükle aramayı deneyin."/>}</>}