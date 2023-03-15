import React from "react";
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

function ProfessionalSummary() {
    const skillsList = [
        { title: 'HTML'},
        { title: 'CSS'},
        { title: 'JavaScript'},
        { title: 'Bootstrap'},
        { title: 'jQuery'},
        { title: 'Git and GitHub'},
        { title: 'ReactJS'},
        { title: 'Material UI'},
        { title: 'Tailwind'},
        { title: 'TypeScript'},
        { title: 'Cloud Computing'},
        { title: 'Amazon Web Services (AWS)'}
    ];
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

            <Autocomplete
                multiple
                id="tags-outlined"
                options={skillsList}
                getOptionLabel={(option) => option.title}
                
                filterSelectedOptions
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="Skills Set"
                    placeholder="Choose Your Skill Set"
                />
                )}
                sx={{margin: "15px 0", width: "50%"}}
            />
        </>
    );
}

export default ProfessionalSummary;