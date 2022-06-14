import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IComment } from "../domain/models/IComment";
import { ICommentRepository } from "../domain/repositories/ICommentRepository";

@injectable()
export default class AddCommentLikeService {
    constructor (
        @inject('commentRepository')
        private commentRepository: ICommentRepository,
    ) {}

    public async execute(id: string): Promise<IComment> {
        const comment = await this.commentRepository.findById(id);

        if (!comment) {
            throw new AppError('Comment not found');
        }

        comment.likes += 1;

        await this.commentRepository.save(comment);

        return comment;
    }
}