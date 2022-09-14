import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';
import jwtToken from '../utils/jwtToken';

export default class UsersClass {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<string> {
    const newUser: User = await this.model.create(user);
    return jwtToken.create(newUser);
  }
}
