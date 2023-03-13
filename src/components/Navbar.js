import React from "react";
import { useState } from "react";
import "../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Navbar = ({ navbarLinks }) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };

    return (
        <nav className="navbar">
            <span className="navbar__logo">CV Builder</span>

            {menuClicked ? (
                <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
            ) : (
                <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
            )}

            <ul
                className={
                    menuClicked ? "navbar__list navbar__list--active" : "navbar__list" 
                }
            >
                <li className="navbar__item">
                    <NavLink
                    to="/"
                    end
                    // className={({ menuClicked }) =>
                    //     menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
                    // }
                    className="navbar__link"
                    >
                    HOME
                    </NavLink>
                </li>

                <li className="navbar__item">
                    <NavLink
                    to="buildCV"
                    className="navbar__link"
                    >
                    BUILD CV
                    </NavLink>
                </li>
                {/* {navbarLinks.map((item) => {
                    return (
                        <li className="navbar__item" key={item.title}>
                            <a className="navbar__link" href={item.url}>
                                {item.title}
                            </a>

                        </li>
                    );
                })} */}

            </ul>
        </nav>
    );
};

export default Navbar;