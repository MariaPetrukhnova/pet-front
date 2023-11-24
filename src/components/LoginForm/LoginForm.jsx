import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logIn } from '../../redux/auth/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
  email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
  password: yup.string().min(6).required(),
});


export const LogInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateErrors = value => {
      setErrors(prevState => ({ ...prevState, [value]: '' }));
    };

    const onEmailChange = value => {
        setEmail(value);
        updateErrors('email');
    };

    const onPasswordChange = value => {
        setPassword(value);
        updateErrors('password');
    };

    const clearFields = () => {
        setEmail('');
        setPassword('');
    }

    const initVal = {
        email,
        password,
      };

    console.log(initVal);

    const handleFormSubmit = e => {
        e.preventDefault();
        schema
          .validate(initVal, { abortEarly: false })
          .then(() => {
            dispatch(logIn({ email, password }))
              .unwrap()
              .then(() => {
                navigate('/main', { replace: true });
                Notify.success('Hooray! Welcome to TrackUBody');
              })
              .catch(error => {
                Notify.failure('Ooops, please enter correct email or password...');
              });
          })
          .catch(err => {
            const errors = err.inner.reduce(
              (acc, err) => ({ ...acc, [err.path]: err.message }),
              {}
            );
            setErrors(errors);
            console.log(errors);
          });
          clearFields();
      };

      console.log(errors);

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={e => onEmailChange(e.target.value)}
                value={email}
                />
                <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={e => onPasswordChange(e.target.value)}
                value={password}
                />
                <button type="submit">
                    Log In
                </button>
            </form>
            <Link to="/register">
                Sign Up
            </Link>
        </>
    )
};