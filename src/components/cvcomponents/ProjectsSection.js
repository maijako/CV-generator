import React, { useState } from "react";
//import useAutocomplete from '@mui/base/useAutocomplete';
import DescriptionIcon from '@mui/icons-material/Description';
import TitleIcon from '@mui/icons-material/Title';
import { TextField, InputAdornment, Autocomplete } from '@mui/material';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import skillSet from "./skills.json";

function ProjectsSection() {
    const [projectInputFields, setProjectInputFields] = useState([{
                                                            projectTitle: "",
                                                            projectSummary: "",
                                                            skillsUsed: null,
                                                            deployedLink: "",
                                                            gitHubLink: ""
                                                        }]);
    
    const handleInputChange = (index, event) => {
        let data = [...projectInputFields];
        data[index][event.target.name] = event.target.value;
        setProjectInputFields(data);
        console.log(projectInputFields);
    }

    const addProjFields = () => {
        let newField = {
            projectTitle: "",
            projectSummary: "",
            skillsUsed: "",
            deployedLink: "",
            gitHubLink: ""
        };
        setProjectInputFields([...projectInputFields, newField]);
    }

    return(
        <>
            <h3>Project Details</h3>
            {
                projectInputFields.map((input, index) => {
                    return(
                        <div key={index} className="containerStyles">
            
                            <TextField
                                id="input-project-name"
                                label="Project Title"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TitleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Enter Project Title"
                                variant="outlined"
                                sx={{margin: "15px 0"}}
                                name="projectTitle"
                                value={input.projectTitle}
                                onChange={event => handleInputChange(index, event)}
                            />

                            <TextField
                                id="project-summary"
                                label="Summary"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DescriptionIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Enter a short summary of the project..."
                                multiline
                                minRows={3}
                                maxRows={8}
                                sx={{width: "50%"}}
                                name="projectSummary"
                                value={input.projectSummary}
                                onChange={event => handleInputChange(index, event)}
                            />

                            <Autocomplete
                                multiple
                                id="skill-outlined"
                                options={skillSet}
                                getOptionLabel={(option) => option.title}
                                filterSelectedOptions
                                renderInput={(params) =>(
                                            <TextField
                                                {...params}
                                                label="Skills Used"
                                                placeholder="Select skills used"
                                                name="skillsUsed"
                                            />
                                        )}
                                onChange={(event, values) => 
                                {
                                    projectInputFields[index].skillsUsed = values;
                                }}
                                sx={{margin: "15px 0", width: "50%"}}
                            />

                            <TextField
                                id="input-deployed-link"
                                label="Application Website"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <WebAssetIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Enter Application URL"
                                variant="outlined"
                                sx={{margin: "15px 0"}}
                                name="deployedLink"
                                value={input.deployedLink}
                                onChange={event => handleInputChange(index, event)}
                            />

                            <TextField
                                id="input-github-link"
                                label="Development Link"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <GitHubIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Enter Development URL"
                                variant="outlined"
                                sx={{margin: "15px 0"}}
                                name="gitHubLink"
                                value={input.gitHubLink}
                                onChange={event => handleInputChange(index, event)}
                            />
                        </div>
                    )
                })
            }
            <button onClick={addProjFields}>Add Project</button>
        </>
    );
}

export default ProjectsSection;