import mysql from './connection';

export default class ProductModel {
  private connection = mysql;

  async getAll() {
    const [rows] = await this.connection.execute(`
      SELECT * FROM Trybesmith.Products
    `);
    
    return rows;
  }
}