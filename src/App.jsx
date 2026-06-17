import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

export default function App() {
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
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased relative">
      {/* Pasamos la acción al Header */}
      <Header onOpenLogin={() => { setIsOpen(true); setIsRegistro(false); }} />
      <MainContent />
      <Footer />

      {/* =========================================================================
         MODAL FLOTANTE EN LA RAÍZ (Con tus colores de marca: ez-orange y ez-blue)
         ========================================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] w-screen h-screen flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 w-full max-w-sm mx-4 shadow-2xl border border-gray-100 flex flex-col items-center relative">
            
            {/* Logo dentro del modal */}
            <img src="./logo.png" alt="Ez-Find Goods" className="h-10 w-auto object-contain mb-4" />

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
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-ez-orange text-sm text-gray-900 bg-white"
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
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-ez-orange text-sm text-gray-900 bg-white"
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
