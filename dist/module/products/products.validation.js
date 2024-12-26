"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the category enum
const categoryEnum = [
    'Fiction',
    'Science',
    'SelfDevelopment',
    'Poetry',
    'Religious',
];
// Create the Zod schema
const productValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: 'Please write the title of the book' }),
    author: zod_1.z
        .string()
        .min(1, { message: 'Please input the author name of the book' }),
    price: zod_1.z
        .number()
        .positive({ message: 'Please enter the price of the product' }),
    category: zod_1.z.enum(categoryEnum, {
        errorMap: () => ({
            message: 'Please provide selected category of the book',
        }),
    }),
    description: zod_1.z
        .string()
        .min(1, { message: 'Please provide the description of the book' }),
    quantity: zod_1.z
        .number()
        .int()
        .positive({ message: 'Please provide the quantity of the book' }),
    inStock: zod_1.z.boolean().refine((val) => val === true || val === false, {
        message: 'Please check the stock book available or not!',
    }),
});
exports.default = productValidationSchema;
