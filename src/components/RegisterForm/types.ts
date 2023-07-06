import { z } from 'zod';
import { registerValidationSchema } from '../../utils/validations';

export type RegisterFormProps = z.infer<typeof registerValidationSchema>;
