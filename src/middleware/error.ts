import { Request, Response, NextFunction } from 'express';

export default function error(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const [status, message] = err.message.split(' | ');
  if (status.length === 1) return res.status(500).json({ message: err.message });

  console.log('================', { status }, { message });
  
  res.status(Number(status)).json({ message });
}