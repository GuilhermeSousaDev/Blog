import { IComment } from "../models/IComment";
import { ICreateComment } from "../models/ICreateComment";

export interface ICommentRepository {
    save(comment: IComment): Promise<IComment>;
    create(data: ICreateComment): Promise<IComment>;
    remove(comment: IComment): Promise<void>;
    find(): Promise<IComment[]>;
    findById(id: string): Promise<IComment>;
    findByUserId(user_id: string): Promise<IComment[]>;
    findByPostId(post_id: string): Promise<IComment[]>;
}