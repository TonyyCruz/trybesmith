import connection from '../models/connection';
import User from '../interfaces/user.interface';
import LoginModel from '../models/login.model';
import jwtToken from '../utils/jwtToken';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(username: string, password: string): Promise<string> {
    if (!username) throw new Error('400 | "username" is required');
    if (!password) throw new Error('400 | "password" is required');

    const user: User = await this.model.login(username, password);
    if (!user) throw new Error('401 | Username or password invalid');
    
    return jwtToken.create({ ...user });
  }
}