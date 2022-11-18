import jwt from 'jsonwebtoken';
import { IDataResponse } from '../interfaces/IDataResponse';

export default function authUtil(authorization: string) {
  try {
    const data = jwt.verify(authorization, 'SECRET') as IDataResponse;
    return { valid: true, data };
  } catch {
    return { valid: false, data: {} as IDataResponse };
  }
}