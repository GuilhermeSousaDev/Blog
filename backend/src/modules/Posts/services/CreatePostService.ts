import fs from 'fs';
import crypto from 'crypto';
import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { ICreatePost } from "../domain/models/ICreatePost";
import { IPost } from "../domain/models/IPost";
import { IPostRepository } from "../domain/repositories/IPostRepository";

@injectable()
export default class CreatePostService {
    constructor (
        @inject('postRepository')
        private postRepository: IPostRepository,
    ) {}

    public async execute ({ title, content, images, buffer, category }: ICreatePost): Promise<IPost> {
        const titleExists = await this.postRepository.findByTitle(title);

        if (titleExists) {
            throw new AppError('This title already exists');
        }

        images.map(src => {
            const hash = crypto.createHash('sha256');

            const path = `${hash}-${src}`;

            const file = fs.createWriteStream(`uploads/${path}`);

            file.write(buffer);
        });

        const post = await this.postRepository.create({
            title, 
            content,
            category,
            images,
        });

        await this.postRepository.save(post);  

        return post;
    }
}