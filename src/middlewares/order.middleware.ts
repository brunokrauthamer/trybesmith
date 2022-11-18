import { NextFunction, Request, Response } from 'express';

function validateInput(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  if (productsIds === undefined) {
    res.status(400).json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length === 0) {
    res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
}

export default { validateInput };