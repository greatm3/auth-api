import { type Request, type Response } from 'express';
import { validatePostRequest } from '../utils/validation.util';

function register(req: Request, res: Response) {
    if (!req.body || Object.entries(req.body).length === 0) {
        return res
            .status(400)
            .json({ success: false, error: 'Empty request body' });
    }

    const email = req.body.email;
    const password = req.body.password;

    const validationResult = validatePostRequest(email, password);
    
    if (!validationResult)
}

export { register };
