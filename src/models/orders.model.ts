import { Pool } from 'mysql2/promise';
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
    GROUP BY id`);
    return ordersData as Order[];
  }
}