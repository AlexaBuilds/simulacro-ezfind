import React from 'react';

export default function MainContent() {
  const productosBase = [
    {
      id: 1,
      tag: 'LIMITED TIME',
      tagColor: 'bg-red-50 text-red-600 border border-red-100',
      titulo: 'Auriculares Inalámbricos Premium',
      precio: '50% OFF',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      alt: 'Auriculares de diadema inalámbricos negros en fondo amarillo'
    },
    {
      id: 2,
      tag: 'NEW',
      tagColor: 'bg-blue-50 text-ez-blue border border-ez-blue/20',
      titulo: 'Reloj Inteligente Sport Pro',
      precio: '$49.99',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      alt: 'Reloj inteligente de diseño minimalista blanco'
    },
    {
      id: 3,
      tag: 'POPULAR',
      tagColor: 'bg-orange-50 text-ez-orange border border-ez-orange/20',
      titulo: 'Cámara Deportiva 4K Ultra',
      precio: '$89.99',
      img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80',
      alt: 'Cámara analógica clásica compacta en fondo plano'
    }
  ];

  const todosLosProductos = [...productosBase, ...productosBase, ...productosBase];

  return (
    <main className="w-full overflow-hidden bg-white">
      
      {/* =========================================================================
          SECCIÓN 1: NUESTRAS PROMOCIONES (#promos)
          ========================================================================= */}
      <section id="promos" className="w-full py-12 scroll-mt-32">
        <div className="text-center mb-12">
          <h1 className="text-xl font-black tracking-widest text-gray-900 uppercase sm:text-2xl">
            Promociones Destacadas
          </h1>
          <div className="h-1 w-12 bg-ez-orange mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="w-full relative px-4">
          <div className="carousel-track">
            {todosLosProductos.map((prod, index) => (
              <article 
                key={`${prod.id}-${index}`} 
                className="w-[320px] md:w-[380px] shrink-0 bg-white rounded-xl border border-gray-100 p-4 flex flex-col justify-between group shadow-xs hover:shadow-md transition-all"
              >
                <div className="w-full h-56 rounded-lg overflow-hidden bg-gray-50 mb-4">
                  <img 
                    src={prod.img} 
                    alt={prod.alt} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                  />
                </div>
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
      </section>

      {/* =========================================================================
          SECCIÓN 2: LO NUEVO (#novedades)
          ========================================================================= */}
      <section id="novedades" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-32">
        <div className="text-center mb-10">
          <h2 className="text-xl font-black tracking-widest text-gray-900 uppercase sm:text-2xl">
            Lo Nuevo en Catálogo
          </h2>
          <div className="h-1 w-12 bg-ez-blue mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs hover:shadow-md transition-all group">
            {/* MODIFICADO ÚNICAMENTE: Imagen del altavoz minimalista premium sobre fondo claro de estudio */}
            <div className="w-full h-52 rounded-xl overflow-hidden bg-gray-50 mb-4">
              <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80" alt="Altavoz Inteligente Premium Minimalista Blanco" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-bold tracking-wide bg-blue-50 text-ez-blue border border-ez-blue/20 px-2 py-0.5 rounded">INTELIGENTE</span>
            <h3 className="font-bold text-gray-800 text-base mt-2 group-hover:text-ez-blue transition-colors">Altavoz Home Smart Base</h3>
            <p className="text-gray-950 font-black text-lg mt-1">$34.50</p>
          </article>

          <article className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs hover:shadow-md transition-all group">
            <div className="w-full h-52 rounded-xl overflow-hidden bg-gray-50 mb-4">
              <img src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80" alt="Ratón ergonómico minimalista" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-bold tracking-wide bg-blue-50 text-ez-blue border border-ez-blue/20 px-2 py-0.5 rounded">ERGONÓMICO</span>
            <h3 className="font-bold text-gray-800 text-base mt-2 group-hover:text-ez-blue transition-colors">Ratón Ergonómico Silent Touch</h3>
            <p className="text-gray-950 font-black text-lg mt-1">$29.99</p>
          </article>

          <article className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs hover:shadow-md transition-all group sm:col-span-2 lg:col-span-1">
            <div className="w-full h-52 rounded-xl overflow-hidden bg-gray-50 mb-4">
              <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80" alt="Zapatillas Deportivas Minimalistas Beige y Rosa" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
            </div>
            <span className="text-[10px] font-bold tracking-wide bg-blue-50 text-ez-blue border border-ez-blue/20 px-2 py-0.5 rounded">LIMITED EDITION</span>
            <h3 className="font-bold text-gray-800 text-base mt-2 group-hover:text-ez-blue transition-colors">Mando Wireless Arcade Neo</h3>
            <p className="text-gray-950 font-black text-lg mt-1">$45.00</p>
          </article>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 3: CUPONES EXCLUSIVOS (#cupones)
          ========================================================================= */}
      <section id="cupones" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-32">
        <div className="w-full rounded-3xl bg-gray-50 p-8 md:p-14 text-center shadow-xs border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-ez-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-ez-orange/5 rounded-full blur-3xl"></div>
          
          <span className="bg-ez-orange/10 text-ez-orange border border-ez-orange/20 text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 inline-block">
            Oferta Especial Club
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-950 mb-3 tracking-tight">
            CUPÓN EXTRA 20% OFF
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
            Utiliza este código en tu carrito de compras para obtener un descuento adicional en toda nuestra línea de tecnología y accesorios seleccionados.
          </p>
          
          <div className="inline-flex bg-white border-2 border-dashed border-ez-blue/40 px-6 py-3 rounded-2xl items-center gap-4 shadow-inner">
            <span className="font-mono text-xl md:text-2xl font-black text-ez-blue tracking-wider">EZFIND20</span>
            <button className="bg-ez-orange hover:bg-ez-blue text-white text-xs font-bold py-2 px-4 rounded-xl transition-all cursor-pointer shadow-xs">
              COPIAR
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4: NUESTRAS TIENDAS (#ubicacion)
          ========================================================================= */}
      <section id="ubicacion" className="w-full border-t border-gray-100 bg-white py-16 scroll-mt-32 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-4">
              <span className="text-ez-blue font-bold text-xs tracking-widest uppercase">Encuéntranos</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Nuestras Tiendas Físicas</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                No solo somos online. Visita nuestros puntos físicos para recoger tus pedidos o recibir asesoramiento personalizado en un entorno limpio y minimalista.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-inner">
                  <h4 className="font-bold text-gray-900 text-sm">Ez-Find Central (Madrid)</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Av. Gran Vía 42, 28013<br/>
                    <span className="text-gray-400">Lunes a Sábado: 10:00 - 21:00</span>
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-inner">
                  <h4 className="font-bold text-gray-900 text-sm">Ez-Find Hub (Barcelona)</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    C/ de Pelai 11, 08001<br/>
                    <span className="text-gray-400">Lunes a Sábado: 09:30 - 20:30</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xs border border-gray-100">
              <img 
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRwF5BvwTBeSwHsJE8KGkvqyCsMQMi-9laYZxg5-qA4utNf8KPtr_bEf_c9adKRYwKWwsLzGfZJVtSO0Kw" 
                alt="Interior de tienda tecnológica premium de diseño minimalista" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}