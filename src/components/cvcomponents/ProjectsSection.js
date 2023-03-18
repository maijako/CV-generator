import React from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import TitleIcon from '@mui/icons-material/Title';
import { TextField, InputAdornment, Autocomplete } from '@mui/material';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';
import skillSet from "./skills.json";

//import useDispatch and useSElector hooks from react-redux into the form
import { useDispatch, useSelector } from "react-redux";
import { 
    setNewProject, 
    setProjectTitle, 
    setProjectSummary, 
    setSkillsUsed, 
    setDeployedLink,  
    setGitHubLink
} from "../../state/project";

function ProjectsSection() {

    const selectProjects = state => state.project;
    const projects = useSelector(selectProjects);
    const dispatch = useDispatch();
    
    const handleTitleChange = (event, projectIndex) => {
        const newTitle = event.target.value;
        dispatch(setProjectTitle(projectIndex, newTitle));
        console.log("After Title Change");
        console.log(projects);
    };

    const handleSummaryChange = (event, projectIndex) => {
        const newSummary = event.target.value;
        dispatch(setProjectSummary(projectIndex, newSummary));
        console.log("After Summary Change");
        console.log(projects);
    };

    const handleSkillsChange = (projectIndex, values) => dispatch(setSkillsUsed(projectIndex, values));

    const handleDeployedLinkChange = (event, projectIndex) => dispatch(setDeployedLink(projectIndex, event.target.value));

    const handleSourceLinkChange = (event, projectIndex) => dispatch(setGitHubLink(projectIndex, event.target.value));

    const addProjFields = () => {
        let newField = {
            projectTitle: "",
            projectSummary: "",
            skillsUsed: [],
            deployedLink: "",
            gitHubLink: ""
        };
        dispatch(setNewProject(newField));
        console.log("After adding new field");
        console.log(projects);
    }

    return(
        <>
            <h3>Project Details</h3>
            {
                projects.map((project, index) => {
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
                                value={project.projectTitle}
                                onChange={event => handleTitleChange(event, index)}
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
                                value={project.projectSummary}
                                onChange={event => handleSummaryChange(event, index)}
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
                                onChange={(event, values) => handleSkillsChange(index, values)}
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
                                value={project.deployedLink}
                                onChange={event => handleDeployedLinkChange(event, index)}
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
                                value={project.gitHubLink}
                                onChange={event => handleSourceLinkChange(event, index)}
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