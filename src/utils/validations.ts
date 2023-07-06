import { z } from 'zod';

export const registerValidationSchema = z.object({
  name: z.string().min(3, { message: 'name must be atleast 3 characters' }),

  description: z
    .string()
    .min(3, { message: 'description must be atleast 3 characters' }),

  image: z.string().min(1, { message: 'Image is required' }),
  value: z.number().min(1, { message: 'Value is required' }),
});
