export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export type ProductListResponse = Product[];

export type ProductResponse = Product;
