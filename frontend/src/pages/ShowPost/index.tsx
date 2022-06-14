import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import api from '../../services/Axios';
import { IShowPost } from '../../interfaces/Posts/IShowPost';

const ShowPost: FC = () => {
    const { id } = useParams();

    const [post, setPost] = useState<string>();

    useEffect(() => {
        (async () => {
            if (id) {
                const { data } = await api.get<IShowPost>(`post/${id}`);

                setPost(data.content);
            }
        })();
    }, [id]);

    return (
        <div>
            { post ? parser(post) : '' }
        </div>
    );
}

export default ShowPost;