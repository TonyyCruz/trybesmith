import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';

export default class UsersClass {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public create = async (user: User) => this.userModel.create(user);
}
