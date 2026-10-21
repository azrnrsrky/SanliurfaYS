'use client';
import {useEffect,useState,lazy,Suspense} from 'react';
const Platform=lazy(()=>import('../src/Platform'));
export default function Page(){const [ready,setReady]=useState(false);useEffect(()=>setReady(true),[]);return ready?<Suspense fallback={<p role="status" style={{padding:40}}>Rehber hazırlanıyor…</p>}><Platform/></Suspense>:<p role="status" style={{padding:40}}>Rehber hazırlanıyor…</p>}
