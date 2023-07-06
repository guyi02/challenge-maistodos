import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { CartStore } from './types';

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addProduct: (productParam) => {
        const isExistsProduct = get().cart.find(
          (product) => product.id === productParam.id
        );

        set((state) => ({
          cart: isExistsProduct
            ? state.cart.filter((product) => product.id !== productParam.id)
            : [...state.cart, productParam],
        }));
      },
    }),
    { name: 'cart' }
  )
);
