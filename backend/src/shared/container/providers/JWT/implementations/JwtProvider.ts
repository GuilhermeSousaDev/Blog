import { JwtPayload, sign, verify } from "jsonwebtoken";
import { auth } from "../../../../../config/auth";
import { ICreateToken } from "../models/ICreateToken";
import { IJwtProvider } from "../models/IJwtProvider";

export default class JwtProvider implements IJwtProvider {
    public async generateToken(data: ICreateToken): Promise<string> {
        return sign(data, auth.secret, { expiresIn: auth.expiresIn });
    }

    public async verifyToken(token: string): Promise<JwtPayload | string> {
        return verify(token, auth.secret);
    }
}