import { apiClient } from '../../api';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { productsKey, productByIdKey } from '../keys/useProduct';
import {
  ProductListResponse,
  ProductResponse,
  Product,
} from '../useProduct/types';

export const useProductList = () => {
  return useQuery<ProductListResponse, Error>({
    queryKey: productsKey(),
    queryFn: async (): Promise<ProductListResponse> => {
      const { data } = await apiClient.get('/products');
      return data;
    },
  });
};

export const useProduct = (id: number) => {
  return useQuery<ProductResponse, Error>({
    queryKey: productByIdKey(id),
    queryFn: async (): Promise<ProductResponse> => {
      const { data } = await apiClient.get(`/products/${id}`);
      return data;
    },
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productData: Product) => {
      const { data } = await apiClient.post('/products', productData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productsKey() });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await apiClient.delete(`/products/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productsKey() });
    },
  });
};
