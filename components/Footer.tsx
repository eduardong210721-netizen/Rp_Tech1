import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                <h3 className="text-white text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                    <i className="fas fa-microchip text-brand-cyan"></i> RP TECH
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                    Tu tienda de confianza para accesorios tecnológicos. Calidad, garantía y los mejores precios del mercado.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-brand-cyan transition">Inicio</a></li>
                    <li><a href="#catalogo" className="hover:text-brand-cyan transition">Catálogo</a></li>
                    <li><a href="#" className="hover:text-brand-cyan transition">Ofertas</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Contacto</h4>
                <p className="text-sm mb-2">
                    <i className="fas fa-phone mr-2 text-brand-cyan"></i> 
                    Pedidos: <span className="text-white font-medium">+51 935 423 395</span>
                </p>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-dark transition-all">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-dark transition-all">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-dark transition-all">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} RP Tech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;