import { LogInForm } from "../../components/LoginForm/LoginForm";
import css from './LoginPage.module.css';

const LoginPage = () => {
    return(
        <section className={css.login_section}>
            <div className={css.wrapper}>
                <LogInForm/>
            </div>
        </section>
    )
};

export default LoginPage;