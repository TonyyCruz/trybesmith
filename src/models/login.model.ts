import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async login(username: string, password: string): Promise<User> {
    const [data] = await this.connection.query(`
    SELECT * FROM Trybesmith.Users
    WHERE Users.username=?
    AND Users.password=?`, [username, password]);
    
    const [userData] = data as User[];
    
    return userData;
  }
}