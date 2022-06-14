import { container } from 'tsyringe';
import UserRepository from '../../modules/User/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '../../modules/User/domain/repositories/IUserRepository';
import PostRepository from '../../modules/Posts/infra/typeorm/repositories/PostRepository';
import { IPostRepository } from '../../modules/Posts/domain/repositories/IPostRepository';
import CommentRepository from '../../modules/Comments/infra/typeorm/repositories/CommentRepository';
import { ICommentRepository } from '../../modules/Comments/domain/repositories/ICommentRepository';

import './providers/JWT';
import './providers/Bcrypt';

container.registerSingleton<IUserRepository>(
    'userRepository',
    UserRepository,
);

container.registerSingleton<IPostRepository>(
    'postRepository',
    PostRepository,
);

container.registerSingleton<ICommentRepository>(
    'commentRepository',
    CommentRepository,  
);