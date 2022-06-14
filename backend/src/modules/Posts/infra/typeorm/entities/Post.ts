import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ObjectID, 
    ObjectIdColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity('posts')
export default class Post {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    likes: number;

    @Column()
    category: string[];

    @CreateDateColumn({ default: () => 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ default: () => 'NOW()' })
    updatedAt: Date;
}