import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Button,
  Text,
  Textarea,
} from '@chakra-ui/react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerValidationSchema } from '../../utils/validations';

import { RegisterFormProps } from './types';
import { useCreateProduct, useEditProduct } from '../../Services/useProduct';
import { useQueryClient } from 'react-query';
import { productsKey } from '../../Services/keys/useProduct';
import { ProductListResponse } from '../../Services/useProduct/types';

const INITIAL_VALUES: RegisterFormProps = {
  name: '',
  description: '',
  image: '',
  price_id_api: '',
  value: 0,
};

const RegisterForm = ({ editProduct }: { editProduct: number }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [queryProductsData] =
    useQueryClient().getQueriesData<ProductListResponse>(productsKey());
  const [_, products] = queryProductsData;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: zodResolver(registerValidationSchema),
  });

  useEffect(() => {
    if (editProduct) {
      const editable = products.find((prod) => prod.id === editProduct);
      reset({
        value: editable?.price,
        ...editable,
      });
      setIsEdit(true);
    }
  }, [editProduct, products, reset]);

  const mutationCreate = useCreateProduct();
  const mutationEdit = useEditProduct();

  const onSubmit: SubmitHandler<RegisterFormProps> = (data) => {
    mutationCreate.mutate({
      ...data,
      id: Math.floor(Math.random() * 20),
      price: data.value,
    });
    reset(INITIAL_VALUES);
  };

  const onEdit: SubmitHandler<RegisterFormProps> = (data) => {
    const editable = products.find((prod) => prod.id === editProduct);
    if (editable) {
      mutationEdit.mutate({
        ...data,
        id: editProduct,
        price: data.value,
      });
      reset(INITIAL_VALUES);
      setIsEdit(false);
    }
  };

  return (
    <Stack spacing={4}>
      <FormControl id='name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input type='text' {...register('name')} />
        {errors.name && errors.name.message && (
          <Text color='red.200'>{errors.name.message}</Text>
        )}
      </FormControl>

      <FormControl id='description' isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea {...register('description')} />
        {errors.description && errors.description.message && (
          <Text color='red.200'>{errors.description.message}</Text>
        )}
      </FormControl>

      <FormControl id='image' isRequired>
        <FormLabel>Image Link</FormLabel>
        <Input type='text' {...register('image')} />
        {errors.image && errors.image.message && (
          <Text color='red.200'>{errors.image.message}</Text>
        )}
      </FormControl>

      <FormControl id='price_id_api' isRequired>
        <FormLabel>Price ID</FormLabel>
        <Input type='text' {...register('price_id_api')} />
        {errors.price_id_api && errors.price_id_api.message && (
          <Text color='red.200'>{errors.price_id_api.message}</Text>
        )}
      </FormControl>
      <FormControl id='value' isRequired>
        <FormLabel>Value</FormLabel>
        <InputGroup>
          <Input
            type='number'
            {...register('value', { valueAsNumber: true })}
          />
        </InputGroup>
        {errors.value && errors.value.message && (
          <Text color='red.200'>{errors.value.message}</Text>
        )}
      </FormControl>

      <Stack spacing={10} pt={2}>
        <Button
          onClick={isEdit ? handleSubmit(onEdit) : handleSubmit(onSubmit)}
          loadingText='Submitting'
          size='lg'
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
        >
          {isEdit ? 'Edit' : 'Save'}
        </Button>
      </Stack>
    </Stack>
  );
};

export default RegisterForm;
