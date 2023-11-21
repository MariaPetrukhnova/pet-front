import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.classList.add('overflowhidden');
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.classList.remove('overflowhidden');
    };

    return (
        <>
        <button onClick={openModal}>
            <FiMenu />
        </button>
        {
            isOpen && (
                <div>
                    <p>TRACKUBODY</p>
                    <NavBar width={500} closeModal={closeModal} />
                    <IoCloseOutline/>
                </div>
            )
        }
        </>
    )
}