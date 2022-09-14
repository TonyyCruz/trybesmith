import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';
import User from '../interfaces/user.interface';
import jwtToken from '../utils/jwtToken';

export default class UserController {
  constructor(private service = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const user: User = req.body;
    const newUser: User = await this.service.create(user);
    const token = jwtToken.create(newUser);

    res.status(StatusCodes.CREATED).json({ token });
  };
}