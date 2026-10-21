import React, { useEffect, useState, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, Home, Menu, Search, Wrench } from 'lucide-react';

export default function MobileNavigation({onMenu}:{onMenu:()=>void}){return <nav className="mobile-nav" aria-label="Hızlı gezinme"><NavLink to="/" end><Home size={20}/>Ana Sayfa</NavLink><NavLink to="/belgeler"><FileText size={20}/>Belgeler</NavLink><NavLink to="/arama"><Search size={20}/>Ara</NavLink><NavLink to="/sorun-cozme"><Wrench size={20}/>Destek</NavLink><button onClick={onMenu}><Menu size={20}/>Menü</button></nav>}