import { Router } from 'express';
import { register, login, profile } from '../controllers/auth.controller';

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login)
authRouter.get('/profile', profile)

export { authRouter } 