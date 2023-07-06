import { z } from 'zod';
import { loginValidationSchema } from '../../utils/validations';

export type LoginFormProps = z.infer<typeof loginValidationSchema>;
