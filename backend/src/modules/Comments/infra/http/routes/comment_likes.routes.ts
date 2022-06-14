import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../../../shared/infra/http/middlewares/isAuthenticated';
import CommentLikeController from '../controllers/CommentLikeController';

const commentLikeRouter = Router();
const commentLikeController = new CommentLikeController();

commentLikeRouter.use(isAuthenticated);

commentLikeRouter.get(
    '/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        }
    }),
    commentLikeController.index,
);

commentLikeRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    commentLikeController.remove,
);

export default commentLikeRouter;