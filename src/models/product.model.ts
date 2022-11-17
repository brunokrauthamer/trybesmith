import { RowDataPacket } from 'mysql2';
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
}