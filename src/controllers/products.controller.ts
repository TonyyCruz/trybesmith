import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/products.service';

export default class ProductsController {
  constructor(private service = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const newProductData = req.body; 
    console.log('log de teste, procutos controller');
    
    const result = await this.service.create(newProductData);
    res.status(StatusCodes.CREATED).json(result);
  };
}