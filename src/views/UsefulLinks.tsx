import React, { useEffect, useState, type ReactNode } from 'react';
import { ExternalLink, Link2 } from 'lucide-react';
import { usefulLinks } from '../data';
import { Ext, SectionTitle } from '../components/ui';

export default function UsefulLinks(){return <><SectionTitle title="Faydalı Bağlantılar" description="Güvenilir eğitim kaynakları, doğrudan resmî platformlarında."/><div className="content-grid">{usefulLinks.map(l=><article className="resource-card" key={l.title}><div className="resource-top"><span className="module-icon"><Link2 size={25}/></span><ExternalLink size={18}/></div><h2>{l.title}</h2><p>{l.description}</p><Ext href={l.url}>Ziyaret Et</Ext></article>)}</div></>}