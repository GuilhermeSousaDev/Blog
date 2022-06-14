import { IPost } from "../models/IPost";
import { ICreatePost } from "../models/ICreatePost";

export interface IPostRepository {
    save(post: IPost): Promise<IPost>;
    create(data: ICreatePost): Promise<IPost>;
    remove(post: IPost): Promise<void>;
    find(): Promise<IPost[]>
    findById(id: string): Promise<IPost>;
    findByTitle(title: string): Promise<IPost>;
    findRecents(): Promise<IPost[]>;
}