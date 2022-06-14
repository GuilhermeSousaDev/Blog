import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <h2>Blog</h2>
            </div>
            <div>
                <Link to={'/post/list'}>Artigos</Link>
                <Link to={'/post/recent'}>Recentes</Link>
                <Link to={'/login'}>
                    <button>Entrar</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;