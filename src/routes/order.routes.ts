import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import authMiddleware from '../middlewares/auth.middleware';
import orderMiddleware from '../middlewares/order.middleware';

const router = Router();

const orderController = new OrderController();

// router.post('/', orderController.create.bind(orderController));

router.get('/', orderController.getAll.bind(orderController));

router.post(
  '/',
  authMiddleware.validateToken,
  orderMiddleware.validateInput,
  orderController.create.bind(orderController),
);

export default router;