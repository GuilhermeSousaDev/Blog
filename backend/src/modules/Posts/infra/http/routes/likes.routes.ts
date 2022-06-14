import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../../../shared/infra/http/middlewares/isAuthenticated';
import LikesController from '../controllers/LikesController';

const likeRouter = Router();
const likesController = new LikesController();

likeRouter.use(isAuthenticated);

likeRouter.get(
    '/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        }
    }),
    likesController.index,
);

likeRouter.get(
    '/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        }
    }),
    likesController.remove,
);

export default likeRouter;