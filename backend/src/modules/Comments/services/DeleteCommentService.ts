import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { ICommentRepository } from "../domain/repositories/ICommentRepository";

@injectable()
export default class DeleteCommentService {
    constructor(
        @inject('commentRepository')
        private commentRepository: ICommentRepository,
    ) {}

    public async execute(id: string): Promise<void> {
        const comment = await this.commentRepository.findById(id);

        if (!comment) {
            throw new AppError('Comment not found');
        }

        await this.commentRepository.remove(comment);
    }
}