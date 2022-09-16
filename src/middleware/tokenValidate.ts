import { Request, Response, NextFunction } from 'express';
import jwtToken from '../utils/jwtToken';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) throw new Error('401 | Token not found');
  
  const validateUser = jwtToken.authentication(authorization);
  res.locals.user = validateUser;

  next();
};