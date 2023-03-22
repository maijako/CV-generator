import React from "react";
import { TextField } from '@mui/material';
import ChatGPTAI from "../ChatGPTAI";

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
            <div className="containerStyles">
                <TextField
                    id="professional-summary"
                    label="Summary"

                    value={summary}
                    onChange={handleChange}
                    
                    placeholder="Provide Professional details about yourself. Use the AI feature for some suggestion."
                    variant="filled"
                    color="warning"
                    focused
                    multiline
                    minRows={5}
                    maxRows={8}
                    sx={{margin: 2, width: "70%"}}
                />
                <ChatGPTAI />
            </div>
        </>
    );
}

export default ProfessionalSummary;