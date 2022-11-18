import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  public user = new UserModel();

  public jwt = jwt;

  public async create(user: IUser): Promise<string> {
    await this.user.create(user);
    const token = await this.generateToken(user);
    return token;
  }

  public async generateToken(user: IUser) {
    const payload = { id: user.id,
      username: user.username,
      level: user.level,
      classe: user.classe };
    return this.jwt.sign(payload, String(process.env.JWT_SECRET));
  }
}