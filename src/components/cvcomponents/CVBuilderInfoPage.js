import React from "react";
import BasicUserInfo from "./BasicUserInfo";
import EducationSection from "./EducationSection";
import { Container } from '@mui/material';

function CVBuilderInfoPage() {
    return(
        <Container fixed sx={{bgcolor: "#cfe8fc", marginTop: 10, padding: 3, borderRadius: 2}}>
            <BasicUserInfo />
            <EducationSection />
        </Container>
    );
}

export default CVBuilderInfoPage;