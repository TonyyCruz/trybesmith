import express from 'express';
import UsersController from '../controllers/users.controller';
import validateMiddleware from '../middleware/validations';

const usersRouter = express.Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  validateMiddleware.userCreate,
  usersController.create,
);

export default usersRouter;