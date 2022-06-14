import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IPost } from "../domain/models/IPost";
import { IPostRepository } from "../domain/repositories/IPostRepository";

@injectable()
export default class AddLikeService {
    constructor (
        @inject('postRepository')
        private postRepository: IPostRepository,
    ) {}

    public async execute (id: string): Promise<IPost> {
        const post = await this.postRepository.findById(id);

        if (!post) {
            throw new AppError('Post not Found');
        }

        post.likes += 1;

        await this.postRepository.save(post);

        return post;
    }
}