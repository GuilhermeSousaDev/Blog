import { getRepository, Repository } from "typeorm";
import { ICreatePost } from "../../../domain/models/ICreatePost";
import { IPost } from "../../../domain/models/IPost";
import { IPostRepository } from "../../../domain/repositories/IPostRepository";
import Post from "../entities/Post";

export default class PostRepository implements IPostRepository {
    private ormRepository: Repository<Post>;
    
    constructor() {
        this.ormRepository = getRepository(Post);
    }

    public async save(post: IPost): Promise<IPost> {
        return this.ormRepository.save(post);
    }

    public async create(data: ICreatePost): Promise<IPost> {
        return this.ormRepository.create(data);
    }

    public async remove(post: IPost): Promise<void> {
        this.ormRepository.remove(post);
    }

    public async find(): Promise<IPost[]> {
        return this.ormRepository.find();
    }

    public async findById(id: string): Promise<IPost> {
        return this.ormRepository.findOne(id);
    }

    public async findByTitle(title: string): Promise<IPost> {
        return this.ormRepository.findOne({
            where: {
                title,
            },
        });
    }

    public async findRecents(): Promise<IPost[]> {
        return this.ormRepository.find({
            order: {
                createdAt: 'DESC',
            },
        });
    }
}