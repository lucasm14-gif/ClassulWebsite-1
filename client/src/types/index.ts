// Product interface
export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  featured: boolean;
  options?: ProductOptions;
}

// Product options interface for customizable products
export interface ProductOptions {
  sizes?: {
    id: string;
    label: string;
  }[];
  colors?: {
    id: string;
    label: string;
    color: string;
  }[];
  hasQuantity?: boolean;
}

// Selected options state interface
export interface SelectedOptions {
  size?: string;
  color?: string;
  quantity: number;
}
