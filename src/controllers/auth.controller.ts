import { type Request, type Response } from 'express';
import { validatePostRequest } from '../utils/validation.util';
import { hashPassword } from '../utils/hash.util';

async function register(req: Request, res: Response) {
    if (!req.body || Object.entries(req.body).length === 0) {
        return res
            .status(400)
            .json({ success: false, error: 'Email and password are required' });
    }

    const email = req.body.email;
    const password = req.body.password;

    const validationResult = validatePostRequest(email, password);

    if (!validationResult.success) {
        const response = {
            success: false,
            error: JSON.parse(validationResult.error.message)[0].message,
        };
        return res.status(422).json(response);
    }

    const passwordHash = await hashPassword(password);

    if (passwordHash instanceof Error) {
        return res
            .status(500)
            .json({ success: false, error: 'Internal server error' });
    }

    res.status(201).json({ res: passwordHash });
}

export { register };
