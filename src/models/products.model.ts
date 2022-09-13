import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/product.interface';

export default class ProductsModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(products: Products): Promise<Products> {
    const { name, amount } = products;
    
    const [data] = await this.connection.query<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?)`, [name, amount]);
    
    const { insertId } = data;
    return { id: insertId, name, amount };
  }

  public async getAll(): Promise<Products[]> {
    const [allProducts] = await this.connection.query(`
    SELECT * FROM Trybesmith.Products`);
    return allProducts as Products[];
  }
}