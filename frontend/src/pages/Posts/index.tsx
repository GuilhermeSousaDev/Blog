import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListPosts from '../../Components/ListPosts';
import { IShowPost } from '../../interfaces/Posts/IShowPost';
import api from '../../services/Axios';

const Posts: FC = () => {
    const [posts, setPosts] = useState<IShowPost[]>();
    
    useEffect(() => {
        (async () => {
            const { data } = await api.get<IShowPost[]>('post');

            if (data) {
                setPosts(data);
            }
        })();

    }, []);

    return (
        <>
            <h1>Posts</h1>
            <Link to={'/post/create'}>Criar Post</Link>

            { posts?
                posts.map(post => <ListPosts post={post} />) 
                : '...Loading'
            }
        </>
    );
}

export default Posts;