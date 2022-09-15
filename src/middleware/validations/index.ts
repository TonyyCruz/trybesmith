import { Request, Response, NextFunction } from 'express';
import productsValidate from './products.validate';
import userCreateValidate from './userCreate.validate';

//  ====  VALIDAÇOES NECESSARIAS PARA OS TESTES DOS REQUISITOS ==== //
export default {
  products: (req: Request, res: Response, next: NextFunction) => {
    const { name, amount } = req.body;
    productsValidate.name(name);
    productsValidate.amount(amount);
    next();
  },

  userCreate: (req: Request, res: Response, next: NextFunction) => {
    const { username, classe, level, password } = req.body;
    userCreateValidate.username(username);
    userCreateValidate.classe(classe);
    userCreateValidate.level(level);
    userCreateValidate.password(password);
    next();
  },
};