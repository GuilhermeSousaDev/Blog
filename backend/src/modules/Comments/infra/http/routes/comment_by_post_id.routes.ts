import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ListCommentByPostIdController from '../controllers/ListCommentByPostIdController';

const listCommentByPostIdRouter = Router();
const listCommentByPostIdController = new ListCommentByPostIdController();

listCommentByPostIdRouter.get(
    '/:post_id', 
    celebrate({
        [Segments.BODY]: {
            post_id: Joi.string().required(),
        },
    }),
    listCommentByPostIdController.index,
);

export default listCommentByPostIdRouter;