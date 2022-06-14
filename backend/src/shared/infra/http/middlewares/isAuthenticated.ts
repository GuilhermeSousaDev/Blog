import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { auth } from '../../../../config/auth';
import { ICreateToken } from '../../../container/providers/JWT/models/ICreateToken';
import AppError from '../../../errors/AppError';

export default function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const token = req.headers.authorization;

    if (!token) {
        throw new AppError('Token not found');
    }

    try {
        const { id, name } = verify(token, auth.secret) as ICreateToken;

        req.user = {
            id,
            name,
        }

        next();
    } catch (error) {
        throw new AppError('Invalid Token');
    }
}