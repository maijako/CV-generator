import React from "react";
import BasicUserInfo from "./BasicUserInfo";
import EducationSection from "./EducationSection";
import { Container } from '@mui/material';
import ExperienceSection from "./ExperienceSection";
import ProfessionalSummary from "./ProfessionalSummary";
import SkillsSection from "./SkillsSection";

function CVBuilderInfoPage() {
    return(
        <Container fixed sx={{bgcolor: "#cfe8fc", marginTop: 10, padding: 3, borderRadius: 2}}>
            <BasicUserInfo />
            <ProfessionalSummary />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
        </Container>
    );
}

export default CVBuilderInfoPage;