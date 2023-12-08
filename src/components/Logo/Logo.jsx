import Logoimg from '../../images/logo.png';
import css from './Logo.module.css';
import { NavLink } from 'react-router-dom/dist';

const Logo = () => {
    return (
        <NavLink to="/"className={css.logo_box}>
            <img src={Logoimg} alt='logo' className={css.logo_img}/>
            <span className={css.logo_spanBlue}>Track</span>
            <span className={css.logo_spanGreen}>U</span>
            <span className={css.logo_spanBlue}>Body</span>
        </NavLink>
    )
};

export default Logo;