import { inject, injectable } from "tsyringe";
import { IUser } from "../domain/models/IUser";
import { IUserRepository } from "../domain/repositories/IUserRepository";

@injectable()
export default class ShowUserService {
    constructor (
        @inject('userRepository')
        private userRepository: IUserRepository,
    ) {}

    public async execute(id: string): Promise<IUser> {
        const user = await this.userRepository.findById(id);

        return user;
    }
}