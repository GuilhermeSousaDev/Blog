import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePostService from '../../../services/CreatePostService';
import DeletePostService from '../../../services/DeletePostService';
import ListPostsService from '../../../services/ListPostsService';
import ShowPostService from '../../../services/ShowPostService';

export default class PostController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listPosts = container.resolve(ListPostsService);

        const posts = await listPosts.execute();

        return res.json(posts);
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const showPost = container.resolve(ShowPostService);

        const post = await showPost.execute(id);

        return res.json(post);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { title, content, category } = req.body;

        const createPost = container.resolve(CreatePostService);

        const posts = await createPost.execute({ 
            title, 
            content,
            category,
        });

        return res.json(posts);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deletePost = container.resolve(DeletePostService);

        await deletePost.execute(id);

        return res.json([]);
    }
}