import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      {/* 🟦 CAMBIADO A AZUL CORPORATIVO */}
      <div className="w-full bg-ez-blue text-white text-xs font-bold py-2 px-4 text-center tracking-wide uppercase">
        ⚡ ¡Grandes Ofertas de Temporada en Ez-Find Goods! Envíos gratis a partir de 30€ ⚡
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-3">
        <Navbar />
      </div>
    </header>
  );
}