import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white py-6 mt-12 border-t-4 border-ez-orange">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
        <p className="text-xs text-gray-400">
          © 2026 Ez-Find Goods. Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-6 text-[11px] font-bold tracking-wide text-gray-300">
          <a href="#terminos" className="hover:text-ez-blue focus:ring-1 focus:ring-ez-blue p-1 rounded">Términos</a>
          <a href="#cookies" className="hover:text-ez-blue focus:ring-1 focus:ring-ez-blue p-1 rounded">Cookies</a>
          <a href="#soporte" className="hover:text-ez-orange focus:ring-1 focus:ring-ez-orange p-1 rounded">Soporte Técnico</a>
        </div>
      </div>
    </footer>
  );
}