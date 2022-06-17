import React, { FC, useCallback } from 'react'
import parser from 'html-react-parser'
import api from '../../services/Axios';
import { Container } from './style';

const PublicPost: FC<{content: string}> = ({ content }) => {
    const handlePostContent = useCallback(async () => {
        const { data } = await api.post('/post', content);

        console.log(data)
    }, [content]);

    return (
        <Container>
            <input type="text" name="title" placeholder="Title" />
            <select name="category">
                <option value="Notice">Notice</option>
                <option value="Feature">Feature</option>
                <option value="Programming Language">Programming Language</option>
                <option value="Bugs">Bugs</option>
            </select>
            <button onClick={handlePostContent}>Post</button>
            { parser(content) }
        </Container>
    )
}

export default PublicPost;