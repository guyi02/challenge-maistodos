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
      updateQty: (productParam) => {
        if (productParam.qty === 0) {
          set((state) => ({
            cart: state.cart.filter(
              (product) => product.id !== productParam.id
            ),
          }));
        } else {
          const newState = get().cart.map((productOnCart) =>
            productOnCart.id === productParam.id
              ? { ...productOnCart, qty: productParam.qty }
              : productOnCart
          );

          set((state) => ({
            cart: newState,
          }));
        }
      },
      clearCart: () => {
        set((state) => ({
          cart: [],
        }));
      },
    }),
    { name: 'cart' }
  )
);
