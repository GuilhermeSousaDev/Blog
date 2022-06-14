import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AddLikeService from '../../../services/AddLikeService';
import RemoveLikeService from '../../../services/RemoveLikeService';

export default class LikesController {
    public async index(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const addLike = container.resolve(AddLikeService);

        const post = await addLike.execute(id);

        return res.json(post);
    }

    public async remove(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const removeLike = container.resolve(RemoveLikeService);

        const post = await removeLike.execute(id);

        return res.json(post);
    }
}