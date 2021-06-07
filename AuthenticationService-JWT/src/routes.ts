import { Router } from 'express';
import authMiddleware from './app/middlewares/authMiddleware';

import AuthController from './app/controllers/AuthController';

import UserController from './app/controllers/UserController';

const router= Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authentication);
router.get('/users', authMiddleware, UserController.index);

export default router;
