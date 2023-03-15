import React from "react";


function SidebarOne() {
    return (
        <>
            <div className="left__side">
                <div className="contactInfo">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>
                            <span className="icon">
                                <icon className="fa fa-phone" aria-hidden="true">+44 789654321</icon>
                            </span>
                        </li>

                        <li>
                            <span className="icon">
                                <icon className="fa fa-phone" aria-hidden="true">email</icon>
                            </span>
                        </li>

                        <li>
                            <span className="icon">
                                <icon className="fa fa-phone" aria-hidden="true">portfolio</icon>
                            </span>
                        </li>

                        <li>
                            <span className="icon">
                                <icon className="fa fa-phone" aria-hidden="true">linkedin</icon>
                            </span>
                        </li>

                        <li>
                            <span className="icon">
                                <icon className="fa fa-phone" aria-hidden="true">github</icon>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="contactInfo education">
                    <h3>Skills</h3>
                    <ul>
                        <li>
                            <span className="text">JavaScript</span>
                        </li>

                        <li>
                            <span className="text">ReactJS</span>
                        </li>

                        <li>
                            <span className="text">node</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarOne