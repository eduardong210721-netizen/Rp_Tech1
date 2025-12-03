
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import { PRODUCTS, WHATSAPP_NUMBER } from './constants';
import { Category, Product } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories: Category[] = ['Todos', 'Audio', 'Carga', 'Accesorios'];

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <Hero />

      <main className="container mx-auto px-4 py-16 flex-grow" id="catalogo">
        
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div>
                <h3 className="text-2xl font-bold text-gray-800">Nuestros Productos</h3>
                <p className="text-gray-500">Encuentra lo que necesitas</p>
            </div>
            
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto hide-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                            activeCategory === cat
                                ? 'bg-brand-dark text-white shadow-lg shadow-blue-900/20'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
                key={product.id} 
                product={product} 
                onOpenModal={handleOpenModal}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
             <div className="text-center py-20">
                <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">No se encontraron productos en esta categoría.</p>
             </div>
        )}

        {/* Custom Quote / Contact Section */}
        <div className="mt-20 bg-gradient-to-r from-brand-dark to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-cyan opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-purple-600 opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                    <i className="fas fa-box-open text-4xl text-brand-cyan"></i>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    Si necesitas un producto tecnológico específico que no está en nuestro catálogo, ¡no te preocupes! 
                    Escríbenos detallando lo que buscas y nosotros te lo <strong>cotizamos y conseguimos</strong> al mejor precio.
                </p>
                <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20RP%20Tech,%20estoy%20buscando%20un%20producto%20que%20no%20veo%20en%20el%20catálogo.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-cyan text-brand-dark font-bold py-4 px-8 rounded-full hover:bg-white transition-all shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 text-lg group-hover:scale-105"
                >
                    <i className="fas fa-comments"></i>
                    Solicitar Cotización Personalizada
                </a>
            </div>
        </div>

      </main>
      
      {/* Sticky Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20RP%20Tech,%20necesito%20ayuda.`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center w-16 h-16 border-4 border-white"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-4xl"></i>
      </a>

      <Footer />

      {/* Modal Overlay */}
      {selectedProduct && (
        <ProductDetailModal 
            product={selectedProduct} 
            onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default App;
