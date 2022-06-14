import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IPostRepository } from "../../Posts/domain/repositories/IPostRepository";
import { IUserRepository } from "../../User/domain/repositories/IUserRepository";
import { IComment } from "../domain/models/IComment";
import { ICreateComment } from "../domain/models/ICreateComment";
import { ICommentRepository } from "../domain/repositories/ICommentRepository";

@injectable()
export default class CreateCommentService {
    constructor (
        @inject('commentRepository')
        private commentRepository: ICommentRepository,
        @inject('userRepository')
        private userRepository: IUserRepository,
        @inject('postRepository')
        private postRepository: IPostRepository,
    ) {}

    public async execute({ 
        comment, 
        post_id, 
        user_id,
    }: ICreateComment): Promise<IComment> {
        const user = await this.userRepository.findById(user_id);
        const post = await this.postRepository.findById(post_id);

        if (!user || !post) {
            throw new AppError('Impossible create the comment');
        }

        const createComment = await this.commentRepository.create({
            comment,
            post_id,
            user_id,
        });

        await this.commentRepository.save(createComment);

        return createComment;
    }
}