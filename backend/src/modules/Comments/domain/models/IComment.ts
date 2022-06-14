import { ObjectID } from "typeorm";

export interface IComment {
    id: ObjectID;
    post_id: string;
    user_id: string;
    comment: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
}