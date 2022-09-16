import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../interfaces/user.interface';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'senhaQualquer';
const jwtConfig = {
  expiresIn: '1d',
  // algorithm: 'HS256',
};

export default {
  create: (userData: User) => Jwt.sign(userData, SECRET, jwtConfig),

  authentication: (token: string) => {
    const decode = Jwt.verify(token, SECRET, (err: any, userData: any) => {
      if (err) throw new Error('401 | Invalid token');
      
      return {
        userId: userData.id,
        username: userData.username,
        classe: userData.classe,
        level: userData.level,
      };
    });

    return decode;
  },
};