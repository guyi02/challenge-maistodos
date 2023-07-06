export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  price_id_api: string;
};

export type ProductListResponse = Product[];

export type ProductResponse = Product;
