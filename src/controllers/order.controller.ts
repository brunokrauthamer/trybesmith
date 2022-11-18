import { Request, Response } from 'express';

import OrderService from '../services/order.service';
import ProductService from '../services/product.service';

export default class OrderController {
  public orderService = new OrderService();

  public productService = new ProductService();

  public async getAll(_req: Request, res: Response) {
    const products = await this.orderService.getAll();

    res.status(200).json(products);
  }

  public async create(req: Request, res: Response) {
    const { productsIds } = req.body;
    const userId = req.body.user.id;
    console.log('userId \n\n\n\n\n\n', userId);
    // const response = await this.orderService.create(id);
    const response = await this.orderService.create(userId);
    const orderId = response.id;
    console.log('orderId\n\n\n\n\n', orderId);
    console.log('productsIds\n\n\n\n\n', { userId, productsIds });
    productsIds.forEach(async (productId: number) => {
      await this.productService.update(productId, orderId);
    });
    res.status(201).json({ userId, productsIds });
  }
}