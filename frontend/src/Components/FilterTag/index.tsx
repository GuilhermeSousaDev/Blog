import { FC } from 'react';
import H4 from '../CreatePost/H4';
import Heading from '../CreatePost/Heading';
import Image from '../CreatePost/Image';
import Italic from '../CreatePost/Italic';
import StrongText from '../CreatePost/Strong';
import Video from '../CreatePost/Video';

interface IFilterTag {
    tag: string | undefined;
}

const FilterTag: FC<IFilterTag> = ({ tag }) => {
    return (
        <>
            { tag === 'img'? <Image /> : '' }
            { tag === 'h1'? <Heading /> : '' }
            { tag === 'h4'? <H4 /> : '' }
            { tag === 'i'? <Italic /> : '' }
            { tag === 'strong'? <StrongText /> : '' }
            { tag === 'video'? <Video /> : '' }
        </>
    );
}

export default FilterTag;