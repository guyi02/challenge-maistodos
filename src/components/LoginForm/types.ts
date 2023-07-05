import { z } from 'zod';
import { loginValidationSchema } from './utils/validation';

export type LoginFormProps = z.infer<typeof loginValidationSchema>;
