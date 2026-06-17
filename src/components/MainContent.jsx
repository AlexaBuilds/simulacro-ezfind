import React from 'react';

export default function MainContent() {
  const productosBase = [
    {
      id: 1,
      tag: 'LIMITED TIME',
      tagColor: 'bg-red-50 text-red-600 border border-red-100',
      titulo: 'Auriculares Inalámbricos Premium',
      precio: '50% OFF',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      alt: 'Auriculares de diadema inalámbricos negros en fondo amarillo'
    },
    {
      id: 2,
      tag: 'NEW',
      tagColor: 'bg-blue-50 text-ez-blue border border-ez-blue/20',
      titulo: 'Reloj Inteligente Sport Pro',
      precio: '$49.99',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      alt: 'Reloj inteligente de diseño minimalista blanco'
    },
    {
      id: 3,
      tag: 'POPULAR',
      tagColor: 'bg-orange-50 text-ez-orange border border-ez-orange/20',
      titulo: 'Cámara Deportiva 4K Ultra',
      precio: '$89.99',
      img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80',
      alt: 'Cámara analógica clásica compacta en fondo plano'
    }
  ];

  // Duplicamos el array tres veces para que la animación fluya sin cortes de pantalla
  const todosLosProductos = [...productosBase, ...productosBase, ...productosBase];

  return (
    <main className="w-full py-12 overflow-hidden bg-white">
      {/* Título de sección */}
      <div className="text-center mb-12">
        <h1 className="text-xl font-black tracking-widest text-gray-900 uppercase sm:text-2xl">
          Promociones Destacadas
        </h1>
        <div className="h-1 w-12 bg-ez-orange mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Ventana contenedora que recorta los elementos que se salen de la pantalla */}
      <div className="w-full relative px-4">
        {/* Pista animada que corre hacia la izquierda por CSS */}
        <div className="carousel-track">
          {todosLosProductos.map((prod, index) => (
            <article 
              key={`${prod.id}-${index}`} 
              className="w-[320px] md:w-[380px] shrink-0 bg-white rounded-xl border border-gray-100 p-4 flex flex-col justify-between group shadow-xs hover:shadow-md transition-all"
            >
              {/* Imagen */}
              <div className="w-full h-56 rounded-lg overflow-hidden bg-gray-50 mb-4">
                <img 
                  src={prod.img} 
                  alt={prod.alt} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                />
              </div>
              
              {/* Contenido */}
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide ${prod.tagColor}`}>
                  {prod.tag}
                </span>
                <h2 className="text-gray-800 font-bold text-base mt-2 group-hover:text-ez-blue transition-colors">
                  {prod.titulo}
                </h2>
                <p className="text-lg font-black text-gray-950 mt-1">{prod.precio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}