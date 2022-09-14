import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';
import User from '../interfaces/user.interface';

export default class UserController {
  constructor(private service = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const user: User = req.body;
    const token: string = await this.service.create(user);

    res.status(StatusCodes.CREATED).json({ token });
  };
}