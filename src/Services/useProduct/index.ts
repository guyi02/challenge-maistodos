import { apiClient } from '../../api';
import { useQuery } from 'react-query';
import { useProductsKey, useProductByIdKey } from '../keys/useProduct';
import { ProductListResponse, ProductResponse } from '../useProduct/types';

export const useProductList = () => {
  return useQuery<ProductListResponse, Error>({
    queryKey: useProductsKey(),
    queryFn: async (): Promise<ProductListResponse> => {
      const { data } = await apiClient.get('/products');
      return data;
    },
  });
};

export const useProduct = (id: number) => {
  return useQuery<ProductResponse, Error>({
    queryKey: useProductByIdKey(id),
    queryFn: async (): Promise<ProductResponse> => {
      const { data } = await apiClient.get(`/products/${id}`);
      return data;
    },
  });
};
