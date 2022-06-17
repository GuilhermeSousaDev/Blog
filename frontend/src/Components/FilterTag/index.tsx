import { FC } from 'react';
import H4 from '../Tags/H4';
import Heading from '../Tags/Heading';
import Image from '../Tags/Image';
import Italic from '../Tags/Italic';
import StrongText from '../Tags/Strong';
import Video from '../Tags/Video';

interface IFilterTag {
    tags: string[] | undefined;
}

const FilterTag: FC<IFilterTag> = ({ tags }) => {
    console.log(tags)

    return (
        <>
            { tags?.includes('h1') ? <Heading /> : '' }
            { tags?.includes('h4') ? <H4 /> : '' }
            { tags?.includes('italic') ? <Italic /> : '' }
            { tags?.includes('strong') ? <StrongText /> : '' }
            { tags?.includes('video') ? <Video /> : '' }
            { tags?.includes('img') ? <Image /> : '' }
                
        </>
    );
}

export default FilterTag;