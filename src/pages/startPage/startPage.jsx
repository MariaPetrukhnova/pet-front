
import AuthBar from '../../components/AuthBar/AuthBar';
// import mainImg from '../../images/main-web.jpg';
import css from './StartPage.module.css';
import { TbMoodShare } from "react-icons/tb";
import { AiOutlineSchedule } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import { IconContext } from "react-icons";

const startPage = () => {
    return (
        <div className={css.wrapper}>
            <section className={css.hero_section}>
                <h1 className={css.hero_title}>TRACKUBODY</h1>
                <h3 className={css.hero_subtitle}>Goal tracking App</h3>
                <p className={css.hero_text}>
                    Welcome to TrackUBody app! You are here to become better version of yourself!
                    Self-improvement can be challenging, but it can also be very rewarding. 
                    Please try to control your daily habits, meal and activity and you will be wondering why you hadn't done it earlier.
                </p>
                <AuthBar/>
            </section>
            <section className={css.features_section}>
                {/* <img src={`${mainImg}`} alt='fitnes hero'/> */}
                <div className={css.features_subsection}>
                    <div className={css.features_title_box}>
                        <IconContext.Provider value={{ color: "white", size: "30px" }}>    
                            <GiStairsGoal  />
                        </IconContext.Provider>    
                        <h3 className={css.features_title}>Set your goals</h3>
                    </div>
                    <p className={css.features_text}>Imagine what kind of person you'd like to be in a 3 month</p>
                </div>
                <div className={css.features_subsection}>
                    <div className={css.features_title_box}>
                        <IconContext.Provider value={{ color: "white", size: "30px" }}> 
                            <AiOutlineSchedule  />
                        </IconContext.Provider>  
                        <h3 className={css.features_title}>Keep on your schedule</h3>
                        </div>
                    <p className={css.features_text}>Permanence and perseverance are your better friends for period of the formation</p>
                </div>
                <div className={css.features_subsection}>
                    <div className={css.features_title_box}>
                        <IconContext.Provider value={{ color: "white", size: "30px" }}> 
                            <TbMoodShare /> 
                        </IconContext.Provider>  
                        <h3 className={css.features_title}>Fix and share your results</h3>
                    </div>
                    <p className={css.features_text}>Enjoy your results! Share them with friends and invite them to get better too!</p>
                </div>
            </section>
        </div>
    )
}

export default startPage