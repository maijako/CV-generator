import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import TitleIcon from "@mui/icons-material/Title";
import { TextField, InputAdornment, Autocomplete } from "@mui/material";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import GitHubIcon from "@mui/icons-material/GitHub";
import skillSet from "./skills.json";

//import Container from "@material-ui/core/Container";
//import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
//import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";

//import useDispatch and useSElector hooks from react-redux into the form
import { useDispatch, useSelector } from "react-redux";
import {
  setNewProject,
  setProjectTitle,
  setProjectSummary,
  setProjectContribution,
  setSkillsUsed,
  setDeployedLink,
  setGitHubLink,
  deleteProject,
} from "../../state/project";

// const useStyles = makeStyles({
//     card: {
//       maxWidth: 345,
//       boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
//       backgroundColor: "#fafafa",
//     },
//     media: {
//       height: 300,
//     },
//   });

function ProjectsSection() {
  const selectProjects = (state) => state.project;
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

  const handleContributionChange = (event, projectIndex) => {
    const newContribution = event.target.value;
    dispatch(setProjectContribution(projectIndex, newContribution));
  };

  const handleSkillsChange = (projectIndex, values) =>
    dispatch(setSkillsUsed(projectIndex, values));

  const handleDeployedLinkChange = (event, projectIndex) =>
    dispatch(setDeployedLink(projectIndex, event.target.value));

  const handleSourceLinkChange = (event, projectIndex) =>
    dispatch(setGitHubLink(projectIndex, event.target.value));

  const addProjFields = () => {
    let newField = {
      projectTitle: "",
      projectSummary: "",
      projectContribution: "",
      skillsUsed: [],
      deployedLink: "",
      gitHubLink: "",
    };
    dispatch(setNewProject(newField));
    console.log("After adding new field");
    console.log(projects);
  };

  const removeProjectFields = (index) => {
    dispatch(deleteProject(index));
  };

  return (
    <>
      <h3>Project Details</h3>
      <Grid container spacing={3}>
        {projects.map((project, index) => {
          return (
            <Grid key={index} item xs={12} sm={12}>
              <div className="containerStyles">
                <Grid container spacing={3}>
                    <Grid item sm={4}></Grid>
                  <Grid item sm={4}>
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
                    variant="filled"
                    color="warning"
                    focused
                    sx={{ margin: "15px 0", width: "100%" }}
                    name="projectTitle"
                    value={project.projectTitle}
                    onChange={(event) => handleTitleChange(event, index)}
                  />
                 </Grid>
                 
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
                    variant="filled"
                    color="warning"
                    focused
                    multiline
                    minRows={3}
                    maxRows={8}
                    sx={{ width: "100%" }}
                    name="projectSummary"
                    value={project.projectSummary}
                    onChange={(event) => handleSummaryChange(event, index)}
                  />

                  <TextField
                    id="project-contribution"
                    label="Contribution"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DescriptionIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Enter a short description of your contributions towards this project..."
                    variant="filled"
                    color="warning"
                    focused
                    multiline
                    minRows={3}
                    maxRows={8}
                    sx={{ margin: "15px 0", width: "100%" }}
                    name="projectContribution"
                    value={project.projectContribution}
                    onChange={(event) => handleContributionChange(event, index)}
                  />

                  <Autocomplete
                    multiple
                    id="skill-filled"
                    options={skillSet}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Skills Used"
                        placeholder="Select skills used"
                        variant="filled"
                        color="warning"
                        focused
                        name="skillsUsed"
                      />
                    )}
                    onChange={(event, values) =>
                      handleSkillsChange(index, values)
                    }
                    sx={{ margin: "15px 0", width: "100%" }}
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
                    variant="filled"
                    color="warning"
                    focused
                    sx={{ margin: "15px 0", width: "100%" }}
                    name="deployedLink"
                    value={project.deployedLink}
                    onChange={(event) => handleDeployedLinkChange(event, index)}
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
                    variant="filled"
                    color="warning"
                    focused
                    sx={{ margin: "15px 0", width: "100%" }}
                    name="gitHubLink"
                    value={project.gitHubLink}
                    onChange={(event) => handleSourceLinkChange(event, index)}
                  />
                  <button
                    className="addButton removeButton"
                    onClick={() => removeProjectFields(index)}
                  >
                    Remove Project
                  </button>
                </Grid>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <button className="addButton" onClick={addProjFields}>
        Add Project
      </button>
    </>
  );
}

export default ProjectsSection;
