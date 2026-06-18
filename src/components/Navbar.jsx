import React from 'react';

export default function Navbar({ onOpenLogin }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Fila Principal de la Cabecera */}
      <div className="flex items-center justify-between gap-4 md:gap-6">
        
        {/* El Logo Principal de Ez-Find */}
        <div className="flex items-center gap-1 cursor-pointer shrink-0">
          <img src="./logo.png" alt="Ez-Find Goods Logo" className="h-10 sm:h-14 w-auto object-contain" />
        </div>

        {/* =========================================================================
            BOTÓN DE CATEGORÍAS (ESTILO OUTLINED + TAMAÑO PEQUEÑO / COMPACTO)
            Ajustado con px-3 py-1.5 y text-xs (Equivalente a size="small")
            ========================================================================= */}
        <button className="flex items-center gap-1.5 bg-transparent text-ez-orange border-2 border-ez-orange hover:bg-ez-blue hover:border-ez-blue hover:text-white font-semibold px-3 py-1.5 rounded-full transition-all duration-300 group shadow-xs focus:outline-none cursor-pointer text-xs shrink-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            className="w-3.5 h-3.5 text-ez-orange group-hover:text-white group-hover:rotate-90 transition-all duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <span>Categorías</span>
        </button>

        {/* Barra de búsqueda para Escritorio */}
        <div className="hidden md:block flex-1 max-w-2xl relative">
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

        {/* Botones de Acción (Mi Cuenta / Carrito) */}
        <div className="flex items-center gap-4 sm:gap-6 text-gray-600 shrink-0">
          {/* 👤 BOTÓN MI CUENTA */}
          <button 
            onClick={onOpenLogin}
            className="flex flex-col items-center cursor-pointer hover:text-ez-blue transition-colors group bg-transparent border-none p-0 focus:outline-none"
            aria-label="Abrir panel de inicio de sesión o registro"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-105 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className="text-[10px] sm:text-xs mt-0.5 font-medium">Mi Cuenta</span>
          </button>

          {/* Carrito */}
          <div className="flex flex-col items-center cursor-pointer hover:text-ez-orange transition-colors relative group">
            <span className="absolute -top-1.5 -right-1.5 bg-ez-blue text-white text-[9px] sm:text-[10px] font-bold w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center">0</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            <span className="text-[10px] sm:text-xs mt-0.5 font-medium">Carrito</span>
          </div>
        </div>
      </div>

      {/* 🔍 BARRA DE BÚSQUEDA EXCLUSIVA PARA MÓVIL */}
      <div className="block md:hidden w-full relative mt-1">
        <label htmlFor="search-input-mobile" className="sr-only">Buscar productos</label>
        <input  
          id="search-input-mobile"
          name="search-mobile"
          type="text" 
          placeholder="Busca ofertas..." 
          className="w-full pl-4 pr-11 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-ez-blue text-xs text-gray-900"
        />
        <button 
          type="button"
          aria-label="Buscar"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-ez-blue text-white p-1.5 rounded-full cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
          </svg>
        </button>
      </div>

      {/* Menú de navegación */}
      <nav className="border-t border-gray-100 pt-2 overflow-x-auto scrollbar-none flex md:justify-center" aria-label="Navegación secundaria">
        <ul className="flex items-center justify-start md:justify-center gap-6 whitespace-nowrap text-[11px] font-black tracking-widest text-gray-600 uppercase">
          <li><a href="#promos" className="hover:text-ez-orange transition-colors">NUESTRAS PROMOCIONES</a></li>
          <li><a href="#cupones" className="hover:text-ez-orange transition-colors">CUPONES EXCLUSIVOS</a></li>
          <li><a href="#novedades" className="hover:text-ez-orange transition-colors">LO NUEVO</a></li>
          <li><a href="#ubicacion" className="hover:text-ez-orange transition-colors">NUESTRAS TIENDAS</a></li>
        </ul>
      </nav>
    </div>
  );
}