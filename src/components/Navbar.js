import React from "react";
import { useState } from "react";
import "../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbarLinks }) => {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenClick = () => {
        setMenuClicked(!menuClicked);
    }


    return (
        <nav className="navbar">
            <span className="navbar__logo">CV Builder</span>

            {menuClicked ? (
            <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
            ) : (
            <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
            )}
            <ul className="navbar__list">
                {navbarLinks.map((item) => {
                    return (
                        <li className="navbar__item" key={item.title}>
                            <a className="navbar__link" href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;