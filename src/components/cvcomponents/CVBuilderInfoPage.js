import React from "react";
import BasicUserInfo from "./BasicUserInfo";
import EducationSection from "./EducationSection";
import { Container } from '@mui/material';
import ExperienceSection from "./ExperienceSection";
import ProfessionalSummary from "./ProfessionalSummary";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import CvOne from "../../cv_designs/designOne/CvOne";
import "./styleForm.css";

function CVBuilderInfoPage() {
    return(
        <div className="buildWrapper">
        <Container className="formContainer" fixed sx={{bgcolor: "#cfe8fc", marginTop: 10, padding: 3, borderRadius: 2}}>
            <BasicUserInfo />
            <ProfessionalSummary />
            <SkillsSection />
            <ProjectsSection />
            <EducationSection />
            <ExperienceSection />
        </Container>
        <Container className="cvContainer">
            < CvOne/>
        </Container>
        </div>
    );
}

export default CVBuilderInfoPage;