import { Request, Response, NextFunction } from 'express';
import productsValidate from './products.validate';

//  ====  VALIDAÇOES NECESSARIAS PARA OS TESTES DOS REQUISITOS ==== //
export default {
  products: (req: Request, res: Response, next: NextFunction) => {
    const { name, amount } = req.body;
    productsValidate.name(name);
    productsValidate.amount(amount);
    next();
  },
};