import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css'

const NavBar = ({ closeModal }) => {
    return (
        <nav className={css.nav_block}>
            <ul className={css.nav_list}>
                <li className={css.nav_item}>
                    <NavLink to="/achievements" onClick={closeModal} className={css.nav_link} > 
                        My achievements
                    </NavLink>
                </li>
                <li className={css.nav_item}>
                    <NavLink to="/habits" onClick={closeModal} className={css.nav_link}>
                        My habits
                    </NavLink>
                </li>
                <li className={css.nav_item}>
                    <NavLink to="/recipes" onClick={closeModal} className={css.nav_link}>
                        My diet
                    </NavLink>
                </li>
                <li className={css.nav_item}>
                    <NavLink to="/activity" onClick={closeModal} className={css.nav_link}>
                        My activity
                    </NavLink>
                </li>
                <li className={css.nav_item}>
                    <NavLink to="/blog" onClick={closeModal} className={css.nav_link}>
                        Blog
                    </NavLink>
                </li>
                <li className={css.nav_item}>
                    <NavLink to="/chats" onClick={closeModal} className={css.nav_link}>
                        Chats
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar;