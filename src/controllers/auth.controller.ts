import { type Request, type Response } from 'express';

function register(req: Request, res: Response) {
    res.status(200).json({
        success: true,
        message: 'registration successful',
    });
}

export { register }