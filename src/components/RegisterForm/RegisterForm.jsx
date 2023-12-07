import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useState } from 'react';
import Select from 'react-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './RegisterForm.module.css';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
    email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
    password: yup.string().min(6).required(),
  });

export const RegisterForm = () => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [goal, setGoal] = useState('');
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateErrors = value => {
        setErrors(prevState => ({ ...prevState, [value]: '' }));
      };
    
    const goalsArr = [
        {value: "To lose weight", label: "To lose weight"},
        {value: "To maintain weight", label: "To maintain weight"},
        {value: "To gain weight", label: "To gain weight"},
        {value: "To cut my body", label: "To cut my body"},
        {value: "To bulk my body", label: "To bulk my body"}
    ];

    const onLoginChange = value => {
        setLogin(value);
        updateErrors('login');
      };

    const onEmailChange = value => {
        setEmail(value);
        updateErrors('email');
    };

    const onPasswordChange = value => {
        setPassword(value);
        updateErrors('password');
    };

    const onGoalChange = value => {
        setGoal(value);
        updateErrors('goal');
    };

    const clearFields = () => {
        setLogin('');
        setEmail('');
        setPassword('');
        setGoal('');
    }

    const initVal = {
        login,
        email,
        password,
        goal
      };

    console.log(initVal);
  
    const handleFormSubmit = e => {
      e.preventDefault();
      schema
        .validate(initVal, { abortEarly: false })
        .then(() => {
          dispatch(register({login, email, password, goal}))
            .unwrap()
            .then(() => {
              navigate('/main', { replace: true });
              Notify.success('Hooray! Welcome to TrackUBody');
            })
            .catch(error => {
              Notify.failure('Ooops, smth is going wrong... Try again!');
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
        <div className={css.form_section}>
            <form onSubmit={handleFormSubmit} className={css.form_block}>
                <input
                type="text"
                id="login"
                name="name"
                placeholder="Enter your name"
                onChange={e => onLoginChange(e.target.value)}
                value={login}
                className={css.input_field}
                />
                <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={e => onEmailChange(e.target.value)}
                value={email}
                className={css.input_field}
                />
                <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={e => onPasswordChange(e.target.value)}
                value={password}
                className={css.input_field}
                />
                <Select 
                  placeholder="Choose your goal" 
                  options={goalsArr} 
                  onChange={(e) => onGoalChange(e.value) } 
                  styles={{
                    placeholder: (base) => ({
                      ...base,
                      fontSize: '11px',
                      color: '#90640c',
                      fontWeight: 400,
                      textTransform: 'uppercase'
                    }),
                  }}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 10,
                    colors: {
                      ...theme.colors,
                      primary25: '#c28f2b',
                      primary: '#90640c',
                    },
                  })}
                  />
                <button type="submit" className={css.form_btn}>
                    Sign up
                </button>
            </form>
            <Link to="/login">
              <button type="button" className={css.link_btn}>
                Log In
              </button>
            </Link>
        </div>
    )
  };