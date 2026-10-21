import React, { useEffect, useState, type ReactNode } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { modules } from './navigation';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import HomePage from './views/HomePage';
import DocumentCenter from './views/DocumentCenter';
import TrainingCenter from './views/TrainingCenter';
import CompetitionCenter from './views/CompetitionCenter';
import AnnouncementCalendar from './views/AnnouncementCalendar';
import AnnouncementDetail from './views/AnnouncementDetail';
import TechnologyGuide from './views/TechnologyGuide';
import TroubleshootingCenter from './views/TroubleshootingCenter';
import CoordinatorGuide from './views/CoordinatorGuide';
import UsefulLinks from './views/UsefulLinks';
import FAQ from './views/FAQ';
import Legislation from './views/Legislation';
import Contact from './views/Contact';
import SearchPage from './views/SearchPage';
import QRPage from './views/QRPage';
import Privacy from './views/Privacy';
import OfficialPlatform from './views/OfficialPlatform';
import NotFound from './views/NotFound';
function App(){const [welcomed,setWelcomed]=useState(false),[menu,setMenu]=useState(false);const location=useLocation();useEffect(()=>{window.scrollTo({top:0});setMenu(false);document.title=(modules.find(m=>location.pathname.startsWith(m.path))?.title||'Dijital Rehber')+' | Şanlıurfa Yenilikçi Sınıflar';if(welcomed){document.querySelector<HTMLElement>('#main')?.focus()}},[location.pathname,welcomed]);if(!welcomed)return <WelcomeScreen onContinue={()=>setWelcomed(true)}/>;return <><a href="#main" className="skip-link">İçeriğe geç</a><Sidebar open={menu} onClose={()=>setMenu(false)}/><div className="app-body"><Header onMenu={()=>setMenu(true)}/><main id="main" tabIndex={-1} className="main"><Routes><Route path="/" element={<HomePage/>}/><Route path="/belgeler/:id?" element={<DocumentCenter/>}/><Route path="/egitimler/:id?" element={<TrainingCenter/>}/><Route path="/yarismalar/:id?" element={<CompetitionCenter/>}/><Route path="/duyurular" element={<AnnouncementCalendar/>}/><Route path="/duyurular/:id" element={<AnnouncementDetail/>}/><Route path="/teknoloji/:id?" element={<TechnologyGuide/>}/><Route path="/sorun-cozme/:id?" element={<TroubleshootingCenter/>}/><Route path="/sorumlu-ogretmen" element={<CoordinatorGuide/>}/><Route path="/baglantilar" element={<UsefulLinks/>}/><Route path="/sss/:id?" element={<FAQ/>}/><Route path="/iletisim" element={<Contact/>}/><Route path="/mevzuat" element={<Legislation/>}/><Route path="/arama" element={<SearchPage/>}/><Route path="/meb-platformu" element={<OfficialPlatform/>}/><Route path="/qr" element={<QRPage/>}/><Route path="/gizlilik" element={<Privacy/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></div><MobileNavigation onMenu={()=>setMenu(!menu)}/></>}
export default function Platform(){return <HashRouter><App/></HashRouter>;}
