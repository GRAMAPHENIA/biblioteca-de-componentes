export interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  imageUrl?: string;
  category?: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
  totalItems: number;
  isOpen: boolean;
}

export interface ThemeState {
  isDark: boolean;
  systemPreference: boolean;
}

export interface FilterState {
  category: string;
  search: string;
  priceRange: [number, number];
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency?: string;
  imageUrl: string;
  rating?: number;
  tags?: string[];
}