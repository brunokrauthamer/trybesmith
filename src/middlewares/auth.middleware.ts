import { NextFunction, Request, Response } from 'express';
import authUtil from '../utils/authUtil';

function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const { valid, data } = authUtil(authorization);
  if (!valid) {
    res.status(401).json({ message: 'Invalid token' });
  }
  // console.log('data \n\n\n\n\n\n\n\n\n', data.id);
  req.body.user = data;

  next();
}

export default { validateToken };