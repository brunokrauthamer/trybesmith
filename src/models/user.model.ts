import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interfaces/IUser';
import { ILogin } from '../interfaces/ILogin';

export default class UserModel {
  private connection = mysql;

  async create(user: IUser): Promise<void> {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }

  async login(user: ILogin): Promise<IUser[]> {
    const { username, password } = user;
    const [rows] = await this.connection.execute<IUser[] & RowDataPacket[]>(`
      SELECT id, username, classe, level FROM Trybesmith.Users WHERE username=? AND password=?
    `, [username, password]);
    return rows;
  }
}