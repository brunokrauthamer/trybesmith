import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  public product = new ProductModel();

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }

  public async create(product: IProduct):Promise<IProduct> {
    const response = await this.product.create(product);
    return response;  
  }

  public async update(productId: number, orderId: number): Promise<void> {
    await this.product.update(productId, orderId);
  }
}
