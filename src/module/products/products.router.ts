import { Router } from 'express';
import { productsController } from './products.controller';

const productsRouter = Router();

productsRouter.post('/create-products', productsController.createProducts);
productsRouter.get('/:userId', productsController.getSingleProducts);
productsRouter.get('/', productsController.getProducts);
productsRouter.put('/:userId', productsController.updateProducts);
productsRouter.delete('/:userId', productsController.deleteProducts);

export default productsRouter;
