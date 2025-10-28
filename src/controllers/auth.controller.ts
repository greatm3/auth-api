import { type Request, type Response, type NextFunction } from 'express';
import { validatePostRequest } from '../utils/validation.util';
import { hashPassword } from '../utils/hash.util';
import { UserService } from '../services/user.service';
import appPool from '../db';

const userService = new UserService(appPool);

export async function register(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!req.body || Object.entries(req.body).length === 0) {
        return res
            .status(400)
            .json({ success: false, error: 'Email and password are required' });
    }

    const { email, password } = req.body;

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
        return next(passwordHash);
    }

    try {
        if (typeof passwordHash === 'string') {
            await userService.createUser(email, passwordHash);
        }

        const newUser = await userService.findByEmail(email);
        if (newUser) {
            const response = {
                success: true,
                message: 'User registered succesfully',
                data: {
                    user: newUser,
                },
            };
            return res.status(201).json(response);
        }
    } catch (err) {
        next(err);
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    if (!req.body || Object.entries(req.body).length === 0) {
        return res
            .status(400)
            .json({ success: false, error: 'Email and password are required' });
    }

    const { email, password } = req.body;

    const validationResult = validatePostRequest(email, password);

    if (!validationResult.success) {
        const response = {
            success: false,
            error: 'Invalid credentials',
        };
        return res.status(422).json(response);
    }
}
