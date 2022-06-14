import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCommentService from "../../../services/CreateCommentService";
import DeleteCommentService from "../../../services/DeleteCommentService";

export default class CommentController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { comment, post_id, user_id } = req.body;
        const createCommentService = container.resolve(CreateCommentService);

        const createComment = await createCommentService.execute({
            comment,
            post_id,
            user_id,
        });

        return res.json(createComment);
    }

    public async remove(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        
        const removeCommentService = container.resolve(DeleteCommentService);

        await removeCommentService.execute(id);

        return res.json([]);
    }
}