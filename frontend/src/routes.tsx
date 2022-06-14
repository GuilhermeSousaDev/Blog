import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import ShowPost from './pages/ShowPost';
import Navbar from './Components/Navbar';

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/post/list' element={<Posts />} />
                <Route path='/post/create' element={<CreatePost />} />
                <Route path='/post/:id' element={<ShowPost />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;