import { Product } from '../../Services/useProduct/types';

export type FavoriteStore = {
  products: Product[];
  setProducts: (products: Product) => void;
};
