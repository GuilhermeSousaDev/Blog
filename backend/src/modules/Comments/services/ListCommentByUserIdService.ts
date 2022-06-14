import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IComment } from "../domain/models/IComment";
import { ICommentRepository } from "../domain/repositories/ICommentRepository";

@injectable()
export default class ListCommentByUserIdService {
    constructor(
        @inject('commentRepository')
        private commentRepository: ICommentRepository,
    ) {}

    public async execute(user_id: string): Promise<IComment[]> {
        const comment = await this.commentRepository.findByUserId(user_id)

        if (!comment) {
            throw new AppError('Comment not found');
        }

        return comment;
    }
}