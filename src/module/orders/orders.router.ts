import { Router } from 'express';
import { ordersController } from './orders.controller';

const orderRouter = Router();

// creating order route
orderRouter.post('/', ordersController.createOrders);
orderRouter.get('/revenue', ordersController.gotTotalRevenue);

export default orderRouter;
