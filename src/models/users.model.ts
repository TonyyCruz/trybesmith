import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    
    const [data] = await this.connection.query<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, [username, classe, level, password]);

    const { insertId } = data;

    return { id: insertId, username, classe, level, password };
  }
}
