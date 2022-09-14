import OrderModel from '../models/orders.model';
import connection from '../models/connection';
import Order from '../interfaces/order.interface';

export default class OrdersService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => this.model.getAll();
}