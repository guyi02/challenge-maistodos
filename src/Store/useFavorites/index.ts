import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { FavoriteStore } from './types';

export const useFavorites = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      products: [],
      setProducts: (productParam) => {
        const isExistsProduct = get().products.find(
          (product) => product.id === productParam.id
        );

        set((state) => ({
          products: isExistsProduct
            ? state.products.filter((product) => product.id !== productParam.id)
            : [...state.products, productParam],
        }));
      },
    }),
    { name: 'products-favorites' }
  )
);
