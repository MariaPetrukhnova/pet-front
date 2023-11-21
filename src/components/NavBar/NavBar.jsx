import { NavLink } from 'react-router-dom';


const NavBar = ({ width, closeModal }) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/achievements" onClick={closeModal} > 
                        My achievements
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/habits" onClick={closeModal} >
                        My habits
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recipes" onClick={closeModal} >
                        My diet
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/activity" onClick={closeModal} >
                        My activity
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" onClick={closeModal} >
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chats" onClick={closeModal}>
                        Chats
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar;