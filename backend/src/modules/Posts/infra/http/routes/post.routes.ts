import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../../../shared/infra/http/middlewares/isAuthenticated';
import PostController from '../controllers/PostController';

const postRouter = Router();
const postController = new PostController();

postRouter.get('/', postController.index);

postRouter.get(
    '/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    postController.show,
);

postRouter.post(
    '/', 
    isAuthenticated,
    celebrate({
        [Segments.BODY]: {
            title: Joi.string().required(),
            content: Joi.string().required(),
            category: Joi.array().required(),
        },
    }), 
    postController.create,
);

postRouter.delete(
    '/:id', 
    isAuthenticated,
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    postController.delete,
);

export default postRouter;