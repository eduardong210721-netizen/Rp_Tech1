
import React, { useState } from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const [imgSrc, setImgSrc] = useState(product.imageUrl);
  const [hasError, setHasError] = useState(false);

  const whatsappMsg = `Hola RP Tech, me interesa el producto: ${product.name} - S/. ${product.price.toFixed(2)}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  const handleImageError = () => {
    if (!hasError) {
        setHasError(true);
        // Fallback to a placeholder that displays the product name if the local image is missing
        setImgSrc(`https://placehold.co/400x400/f1f5f9/0f172a?text=${encodeURIComponent(product.name.replace(/ /g, '+'))}`);
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-square bg-gray-50 flex items-center justify-center cursor-pointer" onClick={() => onOpenModal(product)}>
        <img 
            src={imgSrc} 
            alt={product.imageAlt} 
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={handleImageError}
        />
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end z-10">
            {product.isOffer && (
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
                    OFERTA
                </span>
            )}
            {product.isNew && (
                <span className="bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    NUEVO
                </span>
            )}
        </div>
        
        {/* Quick Action Overlay (Mobile compatible) */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
             <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onOpenModal(product);
                }}
                className="bg-white text-brand-dark font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg hover:bg-brand-cyan"
             >
                Ver Detalles
             </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{product.category}</span>
        </div>
        
        <div className="flex justify-between items-start mb-2 gap-2 cursor-pointer" onClick={() => onOpenModal(product)}>
          <h3 className="text-lg font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-brand-cyan transition-colors">
            {product.name}
          </h3>
          <div className="flex flex-col items-end">
             <span className="text-xl font-black text-brand-dark whitespace-nowrap">
                S/. {product.price.toFixed(2)}
             </span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto flex gap-2">
            <button 
                onClick={() => onOpenModal(product)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-all"
            >
                Detalles
            </button>
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[2] bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-200"
            >
              <i className="fab fa-whatsapp text-lg"></i> 
              <span>Pedir</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
