import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private service = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const newProductData = req.body; 

    const result = await this.service.create(newProductData);
    res.status(StatusCodes.CREATED).json(result);
  };

  public getAll = async (req: Request, res: Response) => {
    const products = await this.service.getAll();    
    res.status(StatusCodes.OK).json(products);
  };
}