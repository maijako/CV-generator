import React from "react";
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import skillsList from "./skills.json";

function SkillsSection() {

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