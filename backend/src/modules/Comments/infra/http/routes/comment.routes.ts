import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../../../shared/infra/http/middlewares/isAuthenticated';
import CommentController from '../controllers/CommentController';

const commentRouter = Router();
const commentController = new CommentController();

commentRouter.use(isAuthenticated);

commentRouter.post(
    '/', 
    celebrate({
        [Segments.BODY]: {
            comment: Joi.string().required(),
            post_id: Joi.string().required(),
            user_id: Joi.string().required(),
        }
    }),
    commentController.create,
);

commentRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    commentController.remove,
);

export default commentRouter;