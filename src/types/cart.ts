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

export interface CartManager {
  items: CartItem[];
  total: number;
  totalItems: number;
  isOpen: boolean;
  loadFromStorage(): void;
  saveToStorage(): void;
  updateTotals(): void;
  addItem(item: CartItem): void;
  removeItem(id: string): void;
  updateQuantity(id: string, quantity: number): void;
  clearCart(): void;
  toggleCart(): void;
  openCart(): void;
  closeCart(): void;
}