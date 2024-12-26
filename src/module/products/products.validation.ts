import { z } from 'zod';

// Define the category enum
const categoryEnum = [
  'Fiction',
  'Science',
  'SelfDevelopment',
  'Poetry',
  'Religious',
] as const;

// Create the Zod schema
const productValidationSchema = z.object({
  title: z.string().min(1, { message: 'Please write the title of the book' }),
  author: z
    .string()
    .min(1, { message: 'Please input the author name of the book' }),
  price: z
    .number()
    .positive({ message: 'Please enter the price of the product' }),
  category: z.enum(categoryEnum, {
    errorMap: () => ({
      message: 'Please provide selected category of the book',
    }),
  }),
  description: z
    .string()
    .min(1, { message: 'Please provide the description of the book' }),
  quantity: z
    .number()
    .int()
    .positive({ message: 'Please provide the quantity of the book' }),
  inStock: z.boolean().refine((val) => val === true || val === false, {
    message: 'Please check the stock book available or not!',
  }),
});

export default productValidationSchema;
