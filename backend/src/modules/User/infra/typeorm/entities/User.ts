import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ObjectID,
    ObjectIdColumn, 
    UpdateDateColumn,
} from "typeorm";

@Entity('user')
export default class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @CreateDateColumn({ default: () => 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ default: () => 'NOW()' })
    updatedAt: Date;
}