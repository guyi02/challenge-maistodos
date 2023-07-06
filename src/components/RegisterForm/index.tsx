import React from 'react';
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
import { useCreateProduct } from '../../Services/useProduct';

const INITIAL_VALUES: RegisterFormProps = {
  name: '',
  description: '',
  image: '',
  value: 0,
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    resolver: zodResolver(registerValidationSchema),
  });

  const mutation = useCreateProduct();

  const onSubmit: SubmitHandler<RegisterFormProps> = (data) => {
    mutation.mutate({
      ...data,
      id: Math.floor(Math.random() * 20),
      price: data.value,
    });
    reset(INITIAL_VALUES);
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
          onClick={handleSubmit(onSubmit)}
          loadingText='Submitting'
          size='lg'
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default RegisterForm;
