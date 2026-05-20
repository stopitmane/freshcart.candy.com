export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: 'sale' | 'new' | 'popular';
  description: string;
  unit: string;
}

export interface CartItem extends Product {
  qty: number;
}

export type Category = 'All' | 'Grains' | 'Vegetables' | 'Proteins' | 'Oils' | 'Spices' | 'Drinks';
