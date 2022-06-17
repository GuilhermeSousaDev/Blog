import React, { 
    FC, 
    MutableRefObject, 
    useCallback, 
    useEffect, 
    useRef, 
    useState,
} from 'react';
import { Config, Container, TextArea } from './style';
import FilterTag from '../../Components/FilterTag';
import api from '../../services/Axios';
import PublicPost from '../PublicPost';

interface IForm {
    content: string;
}

const CreatePost: FC = () => {
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const textAreaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

    const [permitedTags] = useState<string[]>([
        'h1','h4', 'img', 
        'ul', 'ol', 'italic',
        'strong', 'video', 
    ])
    const [form, setForm] = useState<IForm>();
    const [tags, setTags] = useState<string[]>([]);
    const [show, setShow] = useState<boolean>();
    const [content, setContent] = useState<string>();
    const [finalizedPost, setFinalizedPost] = useState<boolean>(false);

    useEffect(() => {
        console.log(content)

        if (form?.content.includes('/')) {
            const content = form?.content.split('');

            const slash = content.filter((c: string) => c === '/');

            if (slash.length === 1) {
                const indexSlash = content.indexOf('/');

                const findedTag = content
                    .filter((c: string, i: number) => i > indexSlash).join('')

                window.addEventListener('keypress', (e: KeyboardEvent) => {
                    if (e.key === 'Enter') {
                        setTimeout(() => {
                            if (permitedTags.includes(findedTag)) {
                                setTags([
                                    ...tags,
                                    findedTag,
                                ]);
                            }
                            setShow(true);
                            textAreaRef.current.value = '';
                        }, 500);
                    };
                });
            }
        }

    }, [form?.content, tags, content, permitedTags]);

    return (
        <Container>
            { finalizedPost === false ?
                <>
                    <Config>
                        <h3>Tags que podem ser utilizadas</h3>
                        h1 h6 img 
                        ul ol i
                        strong video
                        <i>Para Chamar uma das tags digite: 
                            <br /> / + "O nome da tag" <br />
                            Ex: /img ou /h1
                        </i>
                        { content && <button onClick={() => setFinalizedPost(true)}>Postar</button> }
                    </Config>
                    <TextArea
                        onChange={() => setContent(containerRef.current.innerHTML)}
                        ref={containerRef} >

                        { tags && show? <FilterTag tags={tags} /> : '' }

                        <textarea 
                            onChange={e => setForm({
                                ...form,
                                content: e.target.value,
                            })} 
                            ref={textAreaRef}
                        ></textarea>
                    </TextArea>
                </>
                : ''
            }

            { finalizedPost && content? <PublicPost content={content} /> : '' }
        </Container>
    );
}

export default CreatePost;