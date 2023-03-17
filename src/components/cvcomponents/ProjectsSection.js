import React from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import TitleIcon from '@mui/icons-material/Title';
import { TextField, InputAdornment } from '@mui/material';

function ProjectsSection() {
    return(
        <>
            <h3>Project Details</h3>
            {

            }
            {/* Project Name,
                Summary,
                Skills Used,
                Deployed Link,
                GitHub Link */}

            <div className="containerStyles">
            
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
                    // name="instituteName"
                    // value={input.instituteName}
                    // onChange={event => handleInputChange(index, event)}
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
                    // name="roleDetails"
                    // value={input.roleDetails}
                    // onChange={event => handleInputChange(index, event)}
                />
            </div>
        </>
    );
}

export default ProjectsSection;