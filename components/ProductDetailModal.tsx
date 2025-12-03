
import React, { useState } from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [imgSrc, setImgSrc] = useState(product.imageUrl);
  
  const whatsappMsg = `Hola RP Tech, me interesa el producto: ${product.name} - S/. ${product.price.toFixed(2)}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  const handleImageError = () => {
    setImgSrc(`https://placehold.co/600x600/f1f5f9/0f172a?text=${encodeURIComponent(product.name.replace(/ /g, '+'))}`);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 md:hidden bg-black/20 text-white rounded-full p-2 hover:bg-black/40 transition-colors"
        >
          <i className="fas fa-times text-xl w-6 h-6 flex items-center justify-center"></i>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center relative">
           <img 
             src={imgSrc} 
             alt={product.imageAlt}
             className="w-full h-auto object-contain max-h-[400px] mix-blend-multiply"
             onError={handleImageError}
           />
           {product.isOffer && (
             <span className="absolute top-6 left-6 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
               OFERTA
             </span>
           )}
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          {/* Close Button Desktop */}
          <button 
            onClick={onClose}
            className="hidden md:block self-end text-gray-400 hover:text-red-500 transition-colors mb-2"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>

          <span className="text-sm font-bold text-brand-cyan uppercase tracking-wider mb-2">{product.category}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4 leading-tight">{product.name}</h2>
          
          <div className="text-3xl font-black text-brand-dark mb-6 border-b border-gray-100 pb-4">
             S/. {product.price.toFixed(2)}
          </div>

          <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
            {product.idealFor && (
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="flex items-center gap-2 text-blue-800 font-bold mb-2">
                        <i className="fas fa-check-circle"></i> Ideal para:
                    </h4>
                    <p className="text-blue-700 text-sm leading-relaxed font-medium">
                        {product.idealFor}
                    </p>
                </div>
            )}

            <div>
                <h4 className="text-gray-800 font-bold mb-2 text-lg">Descripción</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {product.longDescription || product.description}
                </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100">
             <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-200 hover:shadow-xl hover:scale-[1.02]"
              >
                <i className="fab fa-whatsapp text-2xl"></i> 
                <span className="text-lg">Pedir por WhatsApp</span>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
