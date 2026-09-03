export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  stock: number;
  discountPercentage: number;
  category: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface PromoProduct {
  Nombre: string;
  Precio: number;
  Rating: number;
  Stock: number;
}

export interface DiscountProduct {
  title: string;
  originalPrice: number;
  discountPercentage: number;
  finalPrice: number;
}