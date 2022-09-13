import express from 'express';
import products from './products';
import login from './login';
import orders from './orders';
import users from './users';

const routes = express.Router();

routes.use('/products', products);

routes.use('/login', login);

routes.use('/orders', orders);

routes.use('/users', users);

export default routes;