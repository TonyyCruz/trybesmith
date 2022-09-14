import express from 'express';
import UsersController from '../controllers/users.controller';

const usersRouter = express.Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);

export default usersRouter;