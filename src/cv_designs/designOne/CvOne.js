import React from "react";
import MainSectionOne from "./MainSectionOne";
import SidebarOne from "./SidebarOne";
import "./CvOne.css";


function cvOne() {
    return (
        <div className="container">
            <SidebarOne />
            <MainSectionOne />
        </div>

    )
}

export default cvOne