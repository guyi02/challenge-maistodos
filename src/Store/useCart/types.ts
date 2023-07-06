import { Product } from '../../Services/useProduct/types';
type CartProduct = Product & {
  qty: number;
};
export type CartStore = {
  cart: CartProduct[];
  addProduct: (products: CartProduct) => void;
};
