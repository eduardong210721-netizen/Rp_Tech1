import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-brand-cyan p-2 rounded-lg text-brand-dark">
            <i className="fas fa-microchip text-2xl"></i>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-wider leading-none">RP TECH</h1>
            <p className="text-[10px] text-brand-cyan uppercase tracking-widest hidden sm:block">Catálogo 2025</p>
          </div>
        </div>
        
        <a 
          href="https://wa.me/51935423395" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full font-semibold shadow-md transition-all transform hover:scale-105"
        >
          <i className="fab fa-whatsapp text-xl"></i>
          <span>Contáctanos</span>
        </a>
      </div>
    </header>
  );
};

export default Header;