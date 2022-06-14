import multer from 'multer';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../../../shared/infra/http/middlewares/isAuthenticated';
import FileController from '../controllers/FileController';
import storage from '../../../../../config/multerStorage';

const fileRouter = Router();
const fileController = new FileController();

const multerConfig = multer({ storage });

fileRouter.use(isAuthenticated);

fileRouter.get(
    '/', 
    multerConfig.single('file'),
    fileController.index,
);

fileRouter.delete(
    '/', 
    celebrate({
        [Segments.BODY]: {
            filename: Joi.string().required(),
        }
    }),
    fileController.delete,
);

export default fileRouter;