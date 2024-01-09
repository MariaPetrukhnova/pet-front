import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import css from './Modal.module.css'
import { IconContext } from "react-icons";


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        if (isOpen) {
            setIsOpen(false)
            document.body.classList.remove('overflowhidden');  
        } else {
        setIsOpen(true);
        document.body.classList.add('overflowhidden');
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.classList.remove('overflowhidden');
    };

    return (
        <>
        <button onClick={toggleModal} className={css.modal_menuBtn}>
            <IconContext.Provider value={{ color: "#4f9d2d", size: "32px" }} >
                <FiMenu />
            </IconContext.Provider>
        </button>
        {
            isOpen && (
                <div className={css.modal_backdrop}>
                    <div className={css.modal_overlay}>
                        <NavBar width={500}/>
                        <button type="button" onClick={closeModal} className={css.modal_closeBtn}>
                            <IconContext.Provider value={{ color: "#32631d", size: "18px" }} >
                                <IoCloseOutline />
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            )
        }
        </>
    )
};

export default Modal;