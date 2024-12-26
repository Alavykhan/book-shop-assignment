import mongoose, { model, Schema } from 'mongoose';
import { IOrders } from './orders.interface';

// making order model
const ordersSchema = new Schema<IOrders>(
  {
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      validator: {
        validate: function (value: string) {
          return /^\S+@\S+\.\S+$/.test(value);
        },
      },
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Getting product Id from the database'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide the quantity'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Please provide the total price of the quantity'],
    },
  },
  { timestamps: true },
);

const Orders = model<IOrders>('Orders', ordersSchema);
export default Orders;
