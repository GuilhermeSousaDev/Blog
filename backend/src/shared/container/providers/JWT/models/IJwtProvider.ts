import { JwtPayload } from 'jsonwebtoken';
import { ICreateToken } from './ICreateToken';

export interface IJwtProvider {
    generateToken(data: ICreateToken): Promise<string>;
    verifyToken(token: string): Promise<JwtPayload | string>;
}