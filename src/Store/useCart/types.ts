import { Product } from '../../Services/useProduct/types';
export type CartProduct = Product & {
  qty: number;
};
export type CartStore = {
  cart: CartProduct[];
  addProduct: (products: CartProduct) => void;
  updateQty: (products: CartProduct) => void;
  clearCart: () => void;
};
