import Products from '../products/products.model';
import { IOrders } from './orders.interface';
import Orders from './orders.model';

const createOrders = async (
  email: string,
  productId: string,
  quantity: number,
): Promise<IOrders> => {
  const product = await Products.findById(productId);

  if (!product) {
    throw new Error("product didn't found!");
  }

  //   check if there any sufficient stock
  if (product.quantity < quantity) {
    throw new Error('Insufficient stock');
  }

  // calculating total Price

  const totalPrice = product.price * quantity;

  // creating oder

  const newOrder = new Orders({
    email,
    product: productId,
    quantity,
    totalPrice,
  });

  // updating stock of the product
  product.quantity -= quantity;
  if (product.quantity === 0) {
    product.inStock = false;
  }

  await product.save();
  await newOrder.save();

  return newOrder;
};

// revenue calculation of the orders

const calculationRevenue = async () => {
  const orders = await Orders.find();

  let totalRevenue = 0;

  for (const order of orders) {
    const product = await Products.findById(order.product);

    if (product) {
      totalRevenue += product.price * order.quantity;
    }
  }
  return totalRevenue;
};

export const ordersService = { createOrders, calculationRevenue };
