import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import productMiddleware from '../middlewares/product.middleware';

const router = Router();

const productController = new ProductController();

router.post(
  '/',
  productMiddleware.verifyName,
  productMiddleware.verifyAmount,
  productController.create.bind(productController),
);

router.get('/', productController.getAll.bind(productController));

export default router;
