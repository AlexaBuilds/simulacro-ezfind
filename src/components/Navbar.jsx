import React from 'react';

export default function Navbar({ onOpenLogin }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between gap-6">
        
        {/* El Logo Principal de Ez-Find */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img src="./logo.png" alt="Ez-Find Goods Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Botón de Categorías con ez-orange y ez-blue */}
        <button className="flex items-center gap-2 bg-ez-orange hover:bg-ez-blue text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 group shadow-md focus:outline-none cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <span>Categorías</span>
        </button>

        {/* Barra de búsqueda */}
        <div className="flex-1 max-w-2xl relative">
          <label htmlFor="search-input" className="sr-only">Buscar productos</label>
          <input  
            id="search-input"
            name="search"
            type="text" 
            placeholder="Busca las mejores ofertas en Ez-Find Goods..." 
            className="w-full pl-5 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-ez-blue text-sm text-gray-900"
          />
          <button 
            type="button"
            aria-label="Buscar"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-ez-blue hover:bg-ez-orange text-white p-2 rounded-full cursor-pointer transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-6 text-gray-600">
          {/* 👤 BOTÓN MI CUENTA - Abre el modal con hover corporativo */}
          <button 
            onClick={onOpenLogin}
            className="flex flex-col items-center cursor-pointer hover:text-ez-blue transition-colors group bg-transparent border-none p-0 focus:outline-none"
            aria-label="Abrir panel de inicio de sesión o registro"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:scale-105 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className="text-xs mt-0.5 font-medium">Mi Cuenta</span>
          </button>

          {/* Carrito con ez-blue y ez-orange */}
          <div className="flex flex-col items-center cursor-pointer hover:text-ez-orange transition-colors relative group">
            <span className="absolute -top-1.5 -right-1.5 bg-ez-blue text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            <span className="text-xs mt-0.5 font-medium">Carrito</span>
          </div>
        </div>
      </div>

      <nav className="border-t border-gray-100 pt-2" aria-label="Navegación secundaria">
        <ul className="nav-menu-horizontal">
          <li><a href="#promos" className="nav-link-item">NUESTRAS PROMOCIONES</a></li>
          <li><a href="#cupones" className="nav-link-item">CUPONES EXCLUSIVOS</a></li>
          <li><a href="#novedades" className="nav-link-item">LO NUEVO</a></li>
          <li><a href="#ubicacion" className="nav-link-item">NUESTRAS TIENDAS</a></li>
        </ul>
      </nav>
    </div>
  );
}