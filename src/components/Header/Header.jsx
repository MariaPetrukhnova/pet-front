import Logo from '../Logo/Logo';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import css from './Header.module.css'


const Header = () => {

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
    return (
        <div className={css.header_wrapper}>
            <Logo/>
            {windowWidth > 768 && 
            <NavBar/>}
            {windowWidth < 768 && 
            <Modal/>}
        </div>
    )
};

export default Header;