import React from "react";
import { TextField } from '@mui/material';

function ProfessionalSummary() {
    return(
        <>
            <h3>Professional Summary</h3>
            <TextField
                id="professional-summary"
                label="Summary"
                placeholder="Provide Professional details about yourself. Use the AI feature for some suggestion."
                multiline
                minRows={3}
                maxRows={8}
                sx={{margin: 2, width: "50%"}}
            />
        </>
    );
}

export default ProfessionalSummary;