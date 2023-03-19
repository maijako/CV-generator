import React from "react";
import { TextField } from '@mui/material';

//import useDispatch and useSElector hooks from react-redux into the form
import { useDispatch, useSelector } from "react-redux";
import { setSummary } from "../../state/summary";



function ProfessionalSummary() {
    const dispatch = useDispatch();
    const summary = useSelector(state => state.summary.summary);

    const handleChange = (event) => {
        dispatch(setSummary({ summary: event.target.value }));
    };

    return(
        <>
            <h3>Professional Summary</h3>
            <TextField
                id="professional-summary"
                label="Summary"

                value={summary}
                onChange={handleChange}
                
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