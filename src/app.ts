import express, { Request, Response } from 'express';
import productsRouter from './module/products/products.router';
import orderRouter from './module/orders/orders.router';
const app = express();

//middleware
app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Book Shop database is working');
});

export default app;
