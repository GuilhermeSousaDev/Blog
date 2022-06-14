import { ObjectID } from "typeorm";

export interface IPost {
    id: ObjectID;
    title: string;
    content: string;
    likes: number;
    category: string[];
    createdAt: Date;
    updatedAt: Date;
}