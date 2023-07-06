import { z } from 'zod';

export const loginValidationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be atleast 6 characters' }),
});

export const registerValidationSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'firstName must be atleast 3 characters' }),

  description: z
    .string()
    .min(3, { message: 'lastName must be atleast 3 characters' }),

  image: z.string().min(1, { message: 'Link is required' }),
  value: z.number().min(1, { message: 'Value is required' }),
});
