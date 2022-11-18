import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  private connection = mysql;

  async getAll(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(`
    SELECT o.id AS id, o.userId AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id;
    `);

    return rows;
  }

  // async create(product: IProduct): Promise<IProduct> {
  //   const { name, amount } = product;
  //   const response = await this.connection.execute<ResultSetHeader>(
  //     'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
  //     [name, amount],
  //   );
  //   const [dataInserted] = response;
  //   const { insertId } = dataInserted;
  //   return { id: insertId, ...product };
  // }
}