"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the validation schema for orders
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email('Please provide a valid email address')
        .nonempty('Please provide your email address'),
    product: zod_1.z.string().nonempty('Please provide your email address'),
    quantity: zod_1.z
        .number()
        .min(1, 'Quantity must be at least 1')
        .int('Quantity must be an integer'),
    totalPrice: zod_1.z.number().min(0.01, 'Total price must be greater than 0'),
});
exports.default = orderValidationSchema;
