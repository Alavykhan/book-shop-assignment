import { z } from 'zod';

// Define the validation schema for orders
const orderValidationSchema = z.object({
  email: z
    .string()
    .email('Please provide a valid email address')
    .nonempty('Please provide your email address'),
  product: z.string().nonempty('Please provide your email address'),
  quantity: z
    .number()
    .min(1, 'Quantity must be at least 1')
    .int('Quantity must be an integer'),
  totalPrice: z.number().min(0.01, 'Total price must be greater than 0'),
});

export default orderValidationSchema;
