import { IProducts } from './products.interface';
import Products from './products.model';

const createProducts = async (payload: IProducts): Promise<IProducts> => {
  const result = await Products.create(payload);
  return result;
};

const getProducts = async () => {
  const result = await Products.find();
  return result;
};

const getSingleProducts = async (id: string) => {
  const result = await Products.findById(id);
  return result;
};

const updateProducts = async (id: string, data: IProducts) => {
  const result = await Products.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteProducts = async (id: string) => {
  const result = await Products.findByIdAndDelete(id);
  return result;
};
export const productsService = {
  createProducts,
  getProducts,
  getSingleProducts,
  updateProducts,
  deleteProducts,
};
