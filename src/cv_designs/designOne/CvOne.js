import React from "react";
import TitleOne from "./TitleOne";
import MainSectionOne from "./MainSectionOne";
import SidebarOne from "./SidebarOne";
import "./CvOne.css";


function cvOne() {
    return (
        <div className="container">
            <TitleOne />
            <div className="clearfix">
            <MainSectionOne />
            <SidebarOne />
            </div>
        </div>

    )
}

export default cvOne