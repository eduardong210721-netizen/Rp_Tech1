import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-blue-900 text-white py-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-cyan/20 text-brand-cyan text-sm font-semibold mb-4 border border-brand-cyan/30">
          NUEVA COLECCIÓN
        </span>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
          CATÁLOGO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">2025</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Los mejores productos para hacer tu <strong className="text-white">día a día más práctico</strong>. Tecnología, sonido y energía al mejor precio.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#catalogo" className="px-8 py-3 bg-brand-cyan text-brand-dark font-bold rounded-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                Ver Ofertas
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;