import React from "react";
import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';

// const Navbar = () => {

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
                <span className="navbar-brand nav__logo">CV Builder</span>
                <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mt-2 mt-lg-0 ms-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                HOME
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="buildCV" className="nav-link">
                                BUILD CV
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="preview" className="nav-link">
                                PREVIEW
                            </NavLink>
                        </li>
                    </ul>
                </div>
        </nav >
    );
};

export default Navbar;