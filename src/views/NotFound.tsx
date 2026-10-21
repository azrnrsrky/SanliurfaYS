import React, { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Empty } from '../components/ui';

export default function NotFound(){return <><Empty title="Bu sayfa bulunamadı" text="İçerik kaldırılmış veya adres değişmiş olabilir."/><Link className="button primary" to="/">Ana sayfaya dön <ArrowRight size={17}/></Link></>}