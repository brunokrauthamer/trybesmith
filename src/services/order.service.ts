import { IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/order.model';

export default class OrderService {
  public order = new OrderModel();

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.order.getAll();
    return orders;
  }

  public async create(userId: number) {
    const response = await this.order.create(userId);
    return response;  
  }
}