import { Request, Response } from 'express';
import { productsService } from './products.service';
import productValidationSchema from './products.validation';

const createProducts = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const productValidation = productValidationSchema.parse(payload);
    const result = await productsService.createProducts(productValidation);
    res.send({
      status: true,
      message: 'Product successfully created',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error product didn't create!",
      error,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productsService.getProducts();
    res.send({
      status: true,
      message: 'Successfully get products from database',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error! Didn't get the products from database!",
      error,
    });
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await productsService.getSingleProducts(userId);
    res.send({
      status: true,
      message: 'Successfully get single product from database',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Didn't get single product from database",
      error,
    });
  }
};

const updateProducts = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const data = req.body;
    const result = await productsService.updateProducts(userId, data);

    res.send({
      status: true,
      message: 'Successfully update the data of the product',
      result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error! Didn't update the product of the product!",
      error,
    });
  }
};

const deleteProducts = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    await productsService.deleteProducts(userId);
    res.send({
      status: true,
      message: 'Successfully delete the product',
      result: {},
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error! Didn't update the product!",
      error,
    });
  }
};

export const productsController = {
  createProducts,
  getProducts,
  getSingleProducts,
  updateProducts,
  deleteProducts,
};
