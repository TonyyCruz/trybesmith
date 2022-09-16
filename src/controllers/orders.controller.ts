import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private service = new OrdersService()) {}

  public getAll = async (_req: Request, res: Response) => {   
    const result = await this.service.getAll();
    res.status(StatusCodes.OK).json(result);
  };

  public create = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { userId } = res.locals.user;   
    // console.log('========', { userId, productsIds });
    
    await this.service.create(userId, productsIds);
    
    res.status(StatusCodes.CREATED).json({ userId, productsIds });
  };
}