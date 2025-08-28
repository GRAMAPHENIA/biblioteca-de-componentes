export type IconName = 'heart' | 'cart' | 'star' | 'arrow-right';
export type ButtonVariant = 'primary' | 'ghost' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface Product {
  id: string;
  name: string;
  price: number;
  currency?: string; // por defecto USD
  imageUrl: string;
  rating?: number; // 0..5
  description?: string;
  tags?: string[];
}