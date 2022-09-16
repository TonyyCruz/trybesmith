import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [ordersData] = await this.connection.query(`
    SELECT ord.*, JSON_ARRAYAGG(prod.id) AS productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS prod
    ON ord.id = prod.orderId
    GROUP BY id
    ORDER BY userId ASC`);
    return ordersData as Order[];
  }

  public async create(userId: number, products: number[]) {    
    const [orderData] = await this.connection.query<ResultSetHeader>(`
    INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)`, [userId]);

    products.forEach(async (productId: number) => (
      this.connection.query(`
      UPDATE Trybesmith.Products SET orderId = ?
      WHERE id = ?`, [orderData.insertId, productId])
    ));
  }
}