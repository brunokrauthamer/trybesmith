import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

const orderController = new OrderController();

// router.post('/', orderController.create.bind(orderController));

router.get('/', orderController.getAll.bind(orderController));

export default router;