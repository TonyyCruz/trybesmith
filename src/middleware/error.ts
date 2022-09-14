import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

export default function error(
  err: Error,
  _req: Request,
  _res: Response,
  _next: NextFunction,
) {  
  console.log('----------<<<<<<>>>>>', err);
}