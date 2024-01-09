import Logo from '../Logo/Logo';
import css from './Footer.module.css';
import { useState, useEffect } from 'react';
import { IoLogoInstagram, IoLogoFacebook  } from "react-icons/io";
import { IconContext } from "react-icons";



const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <div className={css.footer_wrapper}>
            <Logo/>
            <div className={css.social_box}>
                {windowWidth > 768 && <p className={css.socials_title}>Find us in socials:</p>}
                <div className={css.icons_wrapper}>
                    <IconContext.Provider value={{ color: "#fff", size: "32px" }} >
                        <IoLogoInstagram className={css.socials_insta}/>
                        <IoLogoFacebook className={css.socials_fb}/>
                    </IconContext.Provider>
                </div>
            </div>
            <p className={css.footer_copywright}>©2023 Petrukhnova ApS</p>
        </div>
    )
};

export default Footer;