import mongoose from 'mongoose';

export interface IOrders {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}
