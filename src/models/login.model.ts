import { Pool } from 'mysql2/promise';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async login(username: string, password: string): Promise<any> {
    const userData = await this.connection.query(`
    SELECT * FROM Trybesmith.Users
    WHERE Users.username=?
    AND Users.password=?`, [username, password]);
    console.log(userData);
    return userData;
  }
}