import { inject, injectable } from "tsyringe";
import { IPost } from "../domain/models/IPost";
import { IPostRepository } from "../domain/repositories/IPostRepository";

@injectable()
export default class ListPostsService {
    constructor (
        @inject('postRepository')
        private postRepository: IPostRepository,
    ) {}

    public async execute (): Promise<IPost[]> {
        const posts = await this.postRepository.find();

        return posts;
    }
}