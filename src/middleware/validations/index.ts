import { Request, Response, NextFunction } from 'express';
import productsValidate from './products.validate';
import userCreateValidate from './userCreate.validate';

//  ====  VALIDAÇOES NECESSARIAS PARA OS TESTES DOS REQUISITOS ==== //
export default {
  productsCreate: (req: Request, res: Response, next: NextFunction) => {
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

  productArrayVerify: (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;
    if (!productsIds) throw new Error('400 | "productsIds" is required');
    if (!Array.isArray(productsIds)) throw new Error('422 | "productsIds" must be an array');
    if (productsIds.length === 0) throw new Error('422 | "productsIds" must include only numbers');

    productsIds.forEach((productId) => {
      if (typeof productId !== 'number') {
        throw new Error('422 | "productsIds" must include only numbers');
      }
    });
    next();
  },
};