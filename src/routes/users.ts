import express from 'express';
import UserController from '../controllers/users.controller';

const usersRouter = express.Router();
const userController = new UserController();

usersRouter.post('/', userController.create);

export default usersRouter;