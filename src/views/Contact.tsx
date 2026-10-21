import React, { useEffect, useState, type ReactNode } from 'react';
import { MapPin } from 'lucide-react';
import { config } from '../data';
import { Ext, SectionTitle } from '../components/ui';

export default function Contact(){return <><SectionTitle title="İletişim ve Koordinasyon" description="Yerel koordinasyon bilgilerine resmî kanallar üzerinden ulaşın."/><article className="article contact-card"><span className="module-icon"><MapPin size={28}/></span><h2>{config.contact.unit}</h2><p>Doğrulanmış birim iletişim bilgileri koordinasyon tarafından eklenecektir.</p><dl><dt>Kurumsal e-posta</dt><dd>{config.contact.email||'Henüz eklenmedi'}</dd><dt>Kurumsal telefon</dt><dd>{config.contact.phone||'Henüz eklenmedi'}</dd></dl><Ext href={config.contact.url}>Şanlıurfa İl MEM resmî sayfası</Ext></article></>}