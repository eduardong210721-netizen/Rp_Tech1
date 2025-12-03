
export type Category = 'Todos' | 'Audio' | 'Carga' | 'Accesorios';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string; // Short description for card
  idealFor?: string; // New field
  longDescription?: string; // New field
  category: Category;
  imageAlt: string;
  imageUrl: string;
  isNew?: boolean;
  isOffer?: boolean;
}
