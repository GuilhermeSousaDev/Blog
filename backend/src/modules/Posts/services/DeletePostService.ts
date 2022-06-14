import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IPostRepository } from "../domain/repositories/IPostRepository";

@injectable()
export default class DeletePostService {
    constructor (
        @inject('postRepository')
        private postRepository: IPostRepository,
    ) {}

    public async execute (id: string): Promise<void> {
        const post = await this.postRepository.findById(id);

        if (!post) {
            throw new AppError('Post not Found');
        }

        await this.postRepository.remove(post);
    }
}