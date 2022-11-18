import { IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/order.model';

export default class OrderService {
  public order = new OrderModel();

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.order.getAll();
    return orders;
  }

  // public async create(product: IOrder):Promise<IOrder> {
  //   const response = await this.order.create(product);
  //   return response;  
  // }
}