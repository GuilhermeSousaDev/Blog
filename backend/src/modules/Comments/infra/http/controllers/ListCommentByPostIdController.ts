import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCommentByUserIdService from "../../../services/ListCommentByUserIdService";

export default class ListCommentByPostIdController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { post_id } = req.params;

        const listComment = container.resolve(ListCommentByUserIdService);

        const comment = await listComment.execute(post_id);

        return res.json(comment);
    }
}