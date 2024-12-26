import { Request, Response } from 'express';
import { ordersService } from './orders.service';
import orderValidationSchema from './orders.validation';

// creating order
const createOrders = async (req: Request, res: Response) => {
  try {
    const parseData = orderValidationSchema.parse(req.body);
    const { email, product, quantity } = parseData;

    const result = await ordersService.createOrders(email, product, quantity);
    res.send({
      status: true,
      message: 'Order successfully placed',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error! Didn't please the order",
      error,
    });
  }
};

// revenue controller
const gotTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await ordersService.calculationRevenue();
    res.send({
      status: true,
      message: 'Revenue calculated successfully"',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error! Didn't get the revenue",
      error,
    });
  }
};

export const ordersController = { createOrders, gotTotalRevenue };
