import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidationSchema } from '../../utils/validations';
import { LoginFormProps } from './types';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    console.log(data);
  };

  return (
    <form className='px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4 md:mr-2 md:mb-0'>
        <label
          className='block mb-2 text-sm font-bold text-gray-700'
          htmlFor='email'
        >
          Email
        </label>

        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.email && 'border-red-500'
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id='firstName'
          type='text'
          placeholder='Email'
          {...register('email')}
        />
        {errors.email && (
          <p className='text-xs italic text-red-500 mt-2'>
            {errors.email?.message}
          </p>
        )}
      </div>

      <div className='mb-4 md:mr-2 md:mb-0'>
        <label
          className='block mb-2 text-sm font-bold text-gray-700'
          htmlFor='password'
        >
          Password
        </label>

        <input
          className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
            errors.password && 'border-red-500'
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id='password'
          type='text'
          placeholder='Password'
          {...register('password')}
        />
        {errors.password && (
          <p className='text-xs italic text-red-500 mt-2'>
            {errors.password?.message}
          </p>
        )}
      </div>

      <input type='submit' />
    </form>
  );
};

export default LoginForm;
