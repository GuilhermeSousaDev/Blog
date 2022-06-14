import { inject, injectable } from "tsyringe";
import { IPost } from "../domain/models/IPost";
import { IPostRepository } from "../domain/repositories/IPostRepository";

@injectable()
export default class ListRecentPostsService {
    constructor (
        @inject('postRepository')
        private postRepository: IPostRepository,
    ) {}

    public async execute (): Promise<IPost[]> {
        const posts = await this.postRepository.findRecents();

        return posts;
    }
}