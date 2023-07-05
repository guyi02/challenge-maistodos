type Product = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria_id: number;
};

export type ProductListResponse = Product[];

export type ProductResponse = Omit<Product, 'categoria_id'>;
