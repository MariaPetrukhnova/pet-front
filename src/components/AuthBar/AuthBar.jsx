import { Link } from 'react-router-dom';


const AuthBar = () => {
    return (
        <>
        <div>
            <Link to="/register">
                Sign Up
            </Link>
            <Link to="/login">
                Log In
            </Link>
        </div>
        </>
    )
};

export default AuthBar;