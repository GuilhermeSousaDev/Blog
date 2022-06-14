import { inject, injectable } from "tsyringe";
import { IHashProvider } from "../../../shared/container/providers/Bcrypt/models/IHashProvider";
import { IJwtProvider } from "../../../shared/container/providers/JWT/models/IJwtProvider";
import AppError from "../../../shared/errors/AppError";
import { ICreateSession } from "../domain/models/ICreateSession";
import { ISession } from "../domain/models/ISession";
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class CreateSessionService {
    constructor(
        @inject('userRepository')
        private userRepository: IUserRepository,
        @inject('hashProvider')
        private hashProvider: IHashProvider,
        @inject('jwtProvider')
        private jwtProvider: IJwtProvider,
    ) {}

    public async execute({ email, password }: ICreateSession): Promise<ISession> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('User not Found');
        }

        const comparePassword = await this.hashProvider
            .compareHash(password, user.password)

        if (!comparePassword) {
            throw new AppError('Incorrect Password');
        }

        const token = await this.jwtProvider.generateToken({ 
            id: user.id.toString(),
            name: user.name,  
        });

        return {
            user,
            token,
        }
    }
}