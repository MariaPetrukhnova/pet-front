import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import css from './RegisterPage.module.css'

const RegisterPage = () => {
    return(
        <section className={css.register_section}>
            <div className={css.wrapper}>
                <RegisterForm/>
            </div>
        </section>
    )
};

export default RegisterPage;