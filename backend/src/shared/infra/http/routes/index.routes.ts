import { Router } from 'express';
import commentRouter from '../../../../modules/Comments/infra/http/routes/comment.routes';
import listCommentByPostIdRouter from '../../../../modules/Comments/infra/http/routes/comment_by_post_id.routes';
import listCommentByUserIdRouter from '../../../../modules/Comments/infra/http/routes/comment_by_user_id.routes';
import commentLikeRouter from '../../../../modules/Comments/infra/http/routes/comment_likes.routes';
import fileRouter from '../../../../modules/Posts/infra/http/routes/file.routes';
import likeRouter from '../../../../modules/Posts/infra/http/routes/likes.routes';
import postRouter from '../../../../modules/Posts/infra/http/routes/post.routes';
import recentPostsRouter from '../../../../modules/Posts/infra/http/routes/recent_posts.routes';
import sessionRouter from '../../../../modules/User/infra/http/routes/session.routes';
import userRouter from '../../../../modules/User/infra/http/routes/user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/login', sessionRouter);

router.use('/post', postRouter);
router.use('/post/recent', recentPostsRouter);
router.use('/like', likeRouter);

router.use('/comment', commentRouter);
router.use('/comment/like', commentLikeRouter);
router.use('/comment/list/user', listCommentByUserIdRouter);
router.use('/comment/list/post', listCommentByPostIdRouter);

router.use('/file', fileRouter);

export default router;