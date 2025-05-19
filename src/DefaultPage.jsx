import { Link } from 'react-router-dom';


export function DefaultPage({ props, children }) {
    return (
        <div id='wrapper'>
            <div id='header'>
                <nav>
                    <ul className='list'>
                        <li><img src='vite.svg' alt='logo' /></li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'> About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>   Contact</Link>
                        </li>
                        <li>
                            <Link to='/animeQuiz'>  Anime Quiz</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id='content'>
                {children}
            </div>

        </div>
    );
}
