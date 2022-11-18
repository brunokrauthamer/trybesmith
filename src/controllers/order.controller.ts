import { Request, Response } from 'express';

import OrderService from '../services/order.service';

export default class OrderController {
  public orderService = new OrderService();

  public async getAll(_req: Request, res: Response) {
    const products = await this.orderService.getAll();

    res.status(200).json(products);
  }

  // public async create(req: Request, res: Response) {
  //   const product = req.body;
  //   const response = await this.productService.create(product);
  //   res.status(201).json(response);
  // }
}