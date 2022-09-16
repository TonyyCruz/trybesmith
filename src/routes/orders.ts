import express from 'express';
import OrdersController from '../controllers/orders.controller';
import tokenValidate from '../middleware/tokenValidate';
import validateMiddleware from '../middleware/validations';

const ordersRouter = express.Router();
const ordersController = new OrdersController();

ordersRouter.get('/', ordersController.getAll);

ordersRouter.post(
  '/',
  tokenValidate,
  validateMiddleware.productArrayVerify,
  ordersController.create,
);

export default ordersRouter;