import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IComment } from "../domain/models/IComment";
import { ICommentRepository } from "../domain/repositories/ICommentRepository";

@injectable()
export default class ListCommentByPostIdService {
    constructor(
        @inject('commentRepository')
        private commentRepository: ICommentRepository,
    ) {}

    public async execute(post_id: string): Promise<IComment[]> {
        const comment = await this.commentRepository.findByPostId(post_id);

        if (!comment) {
            throw new AppError('Comment not found');
        }

        return comment;
    }
}