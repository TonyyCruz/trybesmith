import express from 'express';
import ProductsController from '../controllers/products.controller';

const products = express.Router();
const productController = new ProductsController();

products.post('/', productController.create);

products.get('/', productController.getAll);

export default products;