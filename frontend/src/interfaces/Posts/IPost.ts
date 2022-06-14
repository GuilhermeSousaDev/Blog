export interface IPost {
    post: {
        id: string;
        title: string;
        content: string;
        category: string[];
        createdAt: Date;
        updatedAt: Date;
    }
}