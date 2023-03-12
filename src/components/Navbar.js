import React from 'react';
import "../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbarLinks }) => {
    return (
        <nav className="navbar">
            <span className="navbar__logo">CV Builder</span>
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