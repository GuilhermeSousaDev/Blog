import { Request, Response } from "express";
import { container } from "tsyringe";
import AddCommentLikeService from "../../../services/AddCommentLikeService";
import RemoveCommentLikeService from "../../../services/RemoveCommentLikeService";

export default class CommentLikeController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const addCommentLike = container.resolve(AddCommentLikeService);

        const like = await addCommentLike.execute(id);

        return res.json(like);
    }

    public async remove(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        
        const removeCommentLikeService = container.resolve(RemoveCommentLikeService);

        await removeCommentLikeService.execute(id);

        return res.json([]);
    }
}