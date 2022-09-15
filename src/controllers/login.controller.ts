import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private service = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username) throw new Error('400 | "username" is required');
    if (!password) throw new Error('400 | "password" is required');

    const token: string = await this.service.login(username, password);

    res.status(StatusCodes.OK).json({ token });
  };
}