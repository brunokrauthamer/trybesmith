import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interfaces/IUser';

export default class UserModel {
  private connection = mysql;

  async create(user: IUser): Promise<void> {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    // const [dataInserted] = response;
    // const { insertId } = dataInserted;
    // return { id: insertId, username, classe, level };
  }
}