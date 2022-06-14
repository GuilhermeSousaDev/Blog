import { FC } from 'react';
import { Categorys, Main, MainPosts, RecentPosts } from './style';

const Home: FC = () => {
    return (
        <Main>
            <Categorys />
            <RecentPosts />
            <MainPosts />
        </Main>
    )
}

export default Home;