import { Request, Response } from 'express';

import UserService from '../services/user.services';

export default class UserController {
  public userService = new UserService();

  public async create(req: Request, res: Response) {
    const user = req.body;
    const token = await this.userService.create(user);
    res.status(201).json({ token });
  }

  public async login(req: Request, res: Response) {
    const user = req.body;
    const response = await this.userService.login(user);
    if (response === 'Username or password invalid') {
      return res.status(401).json({ message: response });
    }
    res.status(200).json({ token: response });
  }
}