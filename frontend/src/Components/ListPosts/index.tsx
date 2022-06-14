import { FC, useEffect, useState } from "react";
import parser from 'html-react-parser';
import { ITime } from "../../interfaces/Shared/ITime";
import { IPost } from "../../interfaces/Posts/IPost";

const ListPosts: FC<IPost> = ({ post }) => {
    const [time, setTime] = useState<ITime>();
    
    useEffect(() => {
        setTime({
            day: post.createdAt.getDay(),
            month: post.createdAt.getMonth(),
            year: post.createdAt.getFullYear(),
        });
    }, [post.createdAt]);

    return (
        <>
            <li>
                <h1>{ post.title }</h1>
            </li>
            <li>{ parser(post.content) }</li>
            <li>
                Criado em: { `${time?.day}-${time?.month}-${time?.year}` }
            </li>
        </>
    );
}

export default ListPosts;