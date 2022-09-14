import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private service = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token: string = await this.service.login(username, password);

    res.status(StatusCodes.OK).json({ token });
    // try {
    //   const { username, password } = req.body;
    //   const token: string = await this.service.login(username, password);

    //   res.status(StatusCodes.OK).json({ token });
    // } catch (err) {
    //   next(err);
    // }
  };
}