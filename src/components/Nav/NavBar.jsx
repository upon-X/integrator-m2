import SearchBar from "./SearchBar";
import { Link, NavLink } from 'react-router-dom'
import style from './NavBar.module.css';

const NavBar = ({ onSearch }) => {
    return (
        <div className={style.navBar}>
            <div>
                <Link to='/home'>
                    <button>Home</button>
                </Link>
            </div>
            <div>
                <NavLink to='/about'>
                    <button>About</button>
                </NavLink>
            </div>
            <div>
                <NavLink to='/favorites'>
                    <button>Favorites</button>
                </NavLink>
            </div>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
};

export default NavBar