import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/IProduct';

export default class ProductModel {
  private connection = mysql;

  async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(`
      SELECT * FROM Trybesmith.Products
    `);

    return rows;
  }

  async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const response = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = response;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  async update(productId: number, orderId: number): Promise<void> {
    await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?;',
      [productId, orderId],
    );
  }
}