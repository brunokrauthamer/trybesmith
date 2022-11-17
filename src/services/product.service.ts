import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class UserService {
  public product = new ProductModel();

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }
}
