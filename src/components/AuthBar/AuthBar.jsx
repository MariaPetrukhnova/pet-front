import { Link } from 'react-router-dom';
import css from './AuthBar.module.css';


const AuthBar = () => {
    return (
        <>
        <div className={css.wrapper}>
            <Link to="/register" className={css.nav_btn}>
                Sign Up
            </Link>
            <Link to="/login" className={css.nav_btn}>
                Log In
            </Link>
        </div>
        </>
    )
};

export default AuthBar;