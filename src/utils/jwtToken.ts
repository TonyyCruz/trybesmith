import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../interfaces/user.interface';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'senhaQualquer';
const jwtConfig = {
  expiresIn: '1d',
  alg: 'HS256',
  typ: 'JWT',
};

export default {
  create: (userData: User) => Jwt.sign(userData, SECRET, jwtConfig),
};