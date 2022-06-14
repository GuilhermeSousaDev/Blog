import { getRepository, Repository } from "typeorm";
import { IComment } from "../../../domain/models/IComment";
import { ICreateComment } from "../../../domain/models/ICreateComment";
import { ICommentRepository } from "../../../domain/repositories/ICommentRepository";
import Comment from "../entities/Comment";

export default class CommentRepository implements ICommentRepository {
    private ormRepository: Repository<Comment>;
    
    constructor () {
        this.ormRepository = getRepository(Comment);
    }

    public async save(comment: IComment): Promise<IComment> {
        return this.ormRepository.save(comment);
    }

    public async create(data: ICreateComment): Promise<IComment> {
        return this.ormRepository.create(data);
    }

    public async remove(comment: IComment): Promise<void> {
        this.ormRepository.remove(comment);
    }

    public async find(): Promise<IComment[]> {
        return this.ormRepository.find();
    }

    public async findById(id: string): Promise<IComment> {
        return this.ormRepository.findOne(id);
    }

    public async findByUserId(user_id: string): Promise<IComment[]> {
        return this.ormRepository.find({
            where: {
                user_id,
            },
        });
    }

    public async findByPostId(post_id: string): Promise<IComment[]> {
        return this.ormRepository.find({
            where: {
                post_id,
            },
        });
    }
}