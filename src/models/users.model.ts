import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<any> {
    const { username, classe, level, password } = user;
    const userId = await this.connection.query(`
    INSERT INTO Trybesmith.Products (username, classe, level, password),
    VALUES (?, ?, ?, ?)`, [username, classe, level, password]);
    console.log(userId);
  }
}
