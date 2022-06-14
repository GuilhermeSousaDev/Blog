import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListRecentsPostsService from '../../../services/ListRecentPostsService';

export default class RecentPostsController {
    public async index(req: Request, res: Response): Promise<Response> {
        const recentPosts = container.resolve(ListRecentsPostsService);

        const posts = await recentPosts.execute();

        return res.json(posts);
    }
}