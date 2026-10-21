import React, { useEffect, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { announcements } from '../data';
import { Ext, SectionTitle } from '../components/ui';
import NotFound from '../views/NotFound';

export default function AnnouncementDetail(){const {id}=useParams();const a=announcements.find(x=>x.id===id);if(!a)return <NotFound/>;return <><Link to="/duyurular" className="back"><ChevronLeft size={17}/> Duyurulara dön</Link><SectionTitle title={a.title} description={a.category}/><article className="article"><span className="tag">{a.example?'Örnek içerik':'Bilgilendirme'}</span><p>{a.description}</p><p className="meta">{a.date||'Yayım tarihi eklenmedi'}{a.eventDate&&' · Etkinlik: '+a.eventDate}</p>{a.url&&<Ext href={a.url}>Kaynağı ziyaret et</Ext>}{a.id==='teknolojiye-baslangic'&&<Link className="button primary" to="/sorumlu-ogretmen">Kontrol listesini aç <ArrowRight size={17}/></Link>}</article></>}