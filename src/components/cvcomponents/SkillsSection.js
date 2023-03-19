import React from "react";
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import skillsList from "./skills.json";
//import useDispatch and useSElector hooks from react-redux into the form
import { useDispatch, useSelector } from "react-redux";
import { setTechnologies } from "../../state/technologies";



function SkillsSection() {
    //dispatch the setTechnologies action when the user selects a skill from the list of tecnologies
    const dispatch = useDispatch();
    const selectedTechnologies = useSelector(state => state.technologies.technologies);

    const handleTechSelection = (event, newValue) => {
        dispatch(setTechnologies({technologies: newValue }));
    }


    return (
        <>
            <h3>Skills</h3>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={skillsList}
                getOptionLabel={(option) => option.title}
                //add value and onChange function implementation
                value={selectedTechnologies}
                onChange={handleTechSelection}
               
                
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