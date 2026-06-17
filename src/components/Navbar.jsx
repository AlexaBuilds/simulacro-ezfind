import React, { useState } from 'react';

export default function Navbar() {
  // Estados para controlar el modal de inicio de sesión / registro
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistro, setIsRegistro] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Éxito en Ez-Find Goods!\nUsuario: ${email}\nAcción: ${isRegistro ? 'Registrado correctamente' : 'Sesión iniciada'}`);
    setIsOpen(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Fila principal de navegación */}
      <div className="flex items-center justify-between gap-6">
        
        {/* 1. Logo principal en la fila de navegación */}
        <div className="flex items-center gap-1 cursor-pointer">
        <img src="/favicon.png" alt="Ez-Find Goods Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Botón de Categorías */}
        <button className="flex items-center gap-2 bg-ez-orange hover:bg-ez-blue text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 group shadow-md shadow-ez-orange/20 focus:outline-none focus:ring-2 focus:ring-ez-blue cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <span>Categorías</span>
        </button>

        {/* Barra de búsqueda con accesibilidad corregida */}
        <div className="flex-1 max-w-2xl relative">
          <label htmlFor="search-input" className="sr-only">Buscar productos</label>
          <input  
            id="search-input"
            name="search"
            type="text" 
            placeholder="Busca las mejores ofertas en Ez-Find Goods..." 
            className="w-full pl-5 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-ez-blue focus:bg-white transition-all text-sm shadow-inner text-gray-900"
          />
          {/* Botón de lupa corregido con aria-label para Lighthouse */}
          <button 
            type="button"
            aria-label="Buscar"
            title="Buscar"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-ez-blue hover:bg-ez-orange text-white p-2 rounded-full transition-colors shadow-sm cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
            </svg>
          </button>
        </div>

        {/* Iconos de Acción */}
        <div className="flex items-center gap-6 text-gray-600">
          
          {/* 👤 BOTÓN MI CUENTA: ¡Ahora abre el formulario al hacer clic! */}
          <button 
            onClick={() => { setIsOpen(true); setIsRegistro(false); }}
            className="flex flex-col items-center cursor-pointer hover:text-ez-blue transition-colors group bg-transparent border-none p-0 focus:outline-none focus:text-ez-blue"
            aria-label="Abrir panel de inicio de sesión o registro"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:scale-105 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className="text-xs mt-0.5 font-medium">Mi Cuenta</span>
          </button>

          {/* Carrito */}
          <div className="flex flex-col items-center cursor-pointer hover:text-ez-orange transition-colors relative group">
            <span className="absolute -top-1.5 -right-1.5 bg-ez-blue text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">0</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:scale-105 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            <span className="text-xs mt-0.5 font-medium">Carrito</span>
          </div>
        </div>
      </div>

      {/* Menú de enlaces horizontales exigido */}
      <nav className="border-t border-gray-100 pt-2" aria-label="Navegación secundaria">
        <ul className="nav-menu-horizontal">
          <li><a href="#promos" className="nav-link-item">NUESTRAS PROMOCIONES</a></li>
          <li><a href="#cupones" className="nav-link-item">CUPONES EXCLUSIVOS</a></li>
          <li><a href="#novedades" className="nav-link-item">LO NUEVO</a></li>
          <li><a href="#ubicacion" className="nav-link-item">NUESTRAS TIENDAS</a></li>
        </ul>
      </nav>

      {/* =========================================================================
         MODAL FLOTANTE (Fondo transparente: se ve la misma web limpia por detrás)
         ========================================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-[1px]">
          <div className="bg-white rounded-3xl p-8 w-full max-w-sm mx-4 shadow-2xl border border-gray-100 flex flex-col items-center relative">
            
            {/* 2. Logo que aparece arriba dentro del Modal */}
            <img src="/favicon.png" alt="Ez-Find Goods" className="h-10 w-auto object-contain mb-4" />

            <h2 className="text-ez-orange text-2xl font-bold mb-6 text-center">
              {isRegistro ? 'Crear Cuenta' : 'Iniciar Sesión'}
            </h2>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="flex flex-col gap-1 text-left">
                <label htmlFor="modal-email" className="text-gray-500 text-sm font-semibold">
                  Correo electrónico
                </label>
                <input 
                  id="modal-email"
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@ezfindgoods.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-ez-orange text-sm transition-colors text-gray-900 bg-white"
                />
              </div>

              <div className="flex flex-col gap-1 text-left">
                <label htmlFor="modal-password" className="text-gray-500 text-sm font-semibold">
                  Contraseña
                </label>
                <input 
                  id="modal-password"
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-ez-orange text-sm transition-colors text-gray-900 bg-white"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-ez-orange hover:bg-ez-orange/90 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer shadow-md text-sm uppercase tracking-wider mt-2"
              >
                {isRegistro ? 'Registrarse' : 'Ingresar'}
              </button>

              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-bold py-3 rounded-xl transition-colors cursor-pointer text-sm"
              >
                Cancelar
              </button>
            </form>

            <div className="mt-6 text-xs text-gray-500 text-center">
              {isRegistro ? (
                <p>¿Ya tienes cuenta?{' '}
                  <button onClick={() => setIsRegistro(false)} className="text-ez-blue font-bold hover:underline cursor-pointer">Inicia sesión aquí</button>
                </p>
              ) : (
                <p>¿No tienes cuenta?{' '}
                  <button onClick={() => setIsRegistro(true)} className="text-ez-orange font-bold hover:underline cursor-pointer">Regístrate ahora</button>
                </p>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}