import express from 'express';

//  ==== ROTAS ==== //
import productsRouter from './products';
import loginRouter from './login';
import ordersRouter from './orders';
import usersRouter from './users';

const routes = express.Router();

routes.use('/products', productsRouter);

routes.use('/login', loginRouter);

routes.use('/orders', ordersRouter);

routes.use('/users', usersRouter);

export default routes;