import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCommentByUserIdService from "../../../services/ListCommentByUserIdService";

export default class ListCommentByUserIdController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.params;

        const listComment = container.resolve(ListCommentByUserIdService);

        const comment = await listComment.execute(user_id);

        return res.json(comment);
    }
}