import { type Request, type Response } from 'express';
import { validatePostRequest } from '../utils/validation.util';

function register(req: Request, res: Response) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            error: 'Email and Password are required',
        });
    }
}

export { register };
