import { inject, injectable } from "tsyringe";
import { IPost } from "../domain/models/IPost";
import { IPostRepository } from "../domain/repositories/IPostRepository";

@injectable()
export default class ListPostByTitleService {
    constructor (
        @inject('postRepository')
        private postRepository: IPostRepository,
    ) {}

    public async execute (title: string): Promise<IPost> {
        const posts = await this.postRepository.findByTitle(title);

        return posts;
    }
}