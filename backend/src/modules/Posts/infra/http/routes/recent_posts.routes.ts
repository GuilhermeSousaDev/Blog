import { Router } from 'express';
import RecentPostsController from '../controllers/RecentPostsController';

const recentPostsRouter = Router();
const recentPostsController = new RecentPostsController();

recentPostsRouter.get('/', recentPostsController.index);

export default recentPostsRouter;