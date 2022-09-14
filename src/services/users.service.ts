import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';

export default class UsersClass {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: User) => this.model.create(user);
}
