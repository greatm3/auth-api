import { Router, type Request, type Response } from 'express';
import { register } from '../controllers/auth.controller';

const authRouter = Router();

authRouter.get('/register', register);

export { authRouter }