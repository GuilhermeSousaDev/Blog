import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ListCommentByUserIdController from '../controllers/ListCommentByUserIdController';

const listCommentByUserIdRouter = Router();
const listCommentByUserIdController = new ListCommentByUserIdController();

listCommentByUserIdRouter.get(
    '/:user_id', 
    celebrate({
        [Segments.BODY]: {
            user_id: Joi.string().required(),
        },
    }),
    listCommentByUserIdController.index,
);

export default listCommentByUserIdRouter;