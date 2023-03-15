import React from 'react';

function Sidebar() {
    return (
        <>
            <div className="left__side">
                <div className="profileText">
                    <h1>CANDIDATE NAME</h1>
                    <span>Job Title</span>
                </div>
            </div>

            <div className="contactInfo">
                <h3 className="heading">Contact Info</h3>
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
        </>
    );
};

export default Sidebar