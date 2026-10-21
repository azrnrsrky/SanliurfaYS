import React, { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Ext } from '../components/ui';

export default function Footer(){return <footer><div><strong>Şanlıurfa Yenilikçi Sınıflar Dijital Rehber ve Destek Platformu</strong><p>Yerel Bilgilendirme ve Rehberlik</p></div><div><Link to="/gizlilik">Gizlilik</Link><Ext href="https://yenilikcisinif.eba.gov.tr/" className="text-link">MEB Platformu</Ext><Ext href="https://oba.gov.tr/" className="text-link">ÖBA</Ext></div></footer>}