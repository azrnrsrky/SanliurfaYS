import React, { useEffect, useState, type ReactNode } from 'react';
import { Monitor } from 'lucide-react';
import { Ext, SectionTitle } from '../components/ui';

export default function OfficialPlatform(){return <><SectionTitle title="MEB Yenilikçi Sınıf Platformu" description="Ders örnekleri, etkinlikler ve Bakanlığın resmî Yenilikçi Sınıf içeriklerine ulaşın."/><section className="official-card"><span className="module-icon"><Monitor size={38}/></span><h2>İlhamı resmî kaynağından alın.</h2><p>Bakanlığın platformundaki ders ve etkinlik içeriklerini keşfedin.</p><Ext href="https://yenilikcisinif.eba.gov.tr/" className="button primary">Resmî Platforma Git</Ext><small>yenilikcisinif.eba.gov.tr · Yeni sekmede açılır</small></section></>}