import React, { useEffect, useState, type ReactNode } from 'react';
import { MapPin, Menu } from 'lucide-react';
import { Logos } from '../components/ui';

export default function Header({onMenu}:{onMenu:()=>void}){return <header className="header"><button className="icon-button mobile-menu" onClick={onMenu} aria-label="Menüyü aç"><Menu/></button><div className="header-title"><strong>Şanlıurfa Yenilikçi Sınıflar</strong><span>Dijital Rehber ve Destek Platformu</span></div><div className="header-right"><span className="local-pill"><MapPin size={14}/> Şanlıurfa</span><Logos/></div></header>}