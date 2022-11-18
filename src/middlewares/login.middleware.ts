import { NextFunction, Request, Response } from 'express';

function verifyUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  next();
}

function verifyPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
}

export default { verifyUsername, verifyPassword };
