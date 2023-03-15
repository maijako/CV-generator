import React from "react";
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

function SkillsSection() {
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

    return (
        <>
            <h3>Skills</h3>
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

export default SkillsSection;