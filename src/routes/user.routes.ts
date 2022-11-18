import { Router } from 'express';
import UserController from '../controllers/user.controller';
import userMiddleware from '../middlewares/user.middleware';

const router = Router();

const userController = new UserController();

router.post(
  '/',
  userMiddleware.verifyUsername,
  userMiddleware.verifyClasse,
  userMiddleware.verifyLevel,
  userMiddleware.verifyPassword,
  userController.create.bind(userController),
);

export default router;