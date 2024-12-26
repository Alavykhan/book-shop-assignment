import { model, Schema } from 'mongoose';
import { IProducts } from './products.interface';

const productsSchema = new Schema<IProducts>(
  {
    title: {
      type: String,
      required: [true, 'Please write the title of the book'],
    },
    author: {
      type: String,
      required: [true, 'Please the input the author name of the book'],
    },
    price: {
      type: Number,
      required: [true, 'please enter the price of the product'],
    },
    category: {
      type: String,
      required: [true, 'Please provide the category of the book'],
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      message: 'please provide selected category of the book',
    },
    description: {
      type: String,
      required: [true, 'Please provide the description of the book'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide the quantity of the book'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'Please check the stock book available or not!'],
    },
  },
  { timestamps: true },
);

const Products = model<IProducts>('Products', productsSchema);

export default Products;
