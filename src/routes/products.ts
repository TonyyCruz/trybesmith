import express from 'express';
import ProductsController from '../controllers/products.controller';
import validateMiddleware from '../middleware/validations';

const productsRouter = express.Router();
const productController = new ProductsController();

productsRouter.post(
  '/',
  validateMiddleware.products,
  productController.create,
);

productsRouter.get('/', productController.getAll);

export default productsRouter;