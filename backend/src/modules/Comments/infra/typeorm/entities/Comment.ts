import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ObjectID, 
    ObjectIdColumn, 
    UpdateDateColumn,
} from "typeorm";

@Entity('comments')
export default class Comment {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    post_id: string;

    @Column()
    user_id: string;

    @Column()
    comment: string;

    @Column()
    likes: number;

    @CreateDateColumn({ default: () => 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ default: () => 'NOW()' })
    updatedAt: Date;
}