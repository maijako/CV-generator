import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import TitleIcon from "@mui/icons-material/Title";
import {
  TextField,
  InputAdornment,
  Autocomplete,
  ThemeProvider,
  Box,
  createTheme,
} from "@mui/material";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import GitHubIcon from "@mui/icons-material/GitHub";
import skillSet from "./skills.json";
import { blue } from "@mui/material/colors";
import { Button } from "@mui/material";


function ProjectsSection() {
  const [projectInputFields, setProjectInputFields] = useState([
    {
      projectTitle: "",
      projectSummary: "",
      skillsUsed: null,
      deployedLink: "",
      gitHubLink: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    let data = [...projectInputFields];
    data[index][event.target.name] = event.target.value;
    setProjectInputFields(data);
    console.log(projectInputFields);
  };

  const addProjFields = () => {
    let newField = {
      projectTitle: "",
      projectSummary: "",
      skillsUsed: "",
      deployedLink: "",
      gitHubLink: "",
    };
    setProjectInputFields([...projectInputFields, newField]);
  };
  const theme = createTheme({
    palette: {
      primary: blue,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root.Mui-focused": {
              color: blue[500],
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: blue[500],
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ color: "black", marginBottom: "10px" }}>
          Project Details
        </h3>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {projectInputFields.map((input, index) => {
            return (
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
                  variant="filled"
                  sx={{ margin: "15px 0" }}
                  name="projectTitle"
                  value={input.projectTitle}
                  onChange={(event) => handleInputChange(index, event)}
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
                  variant="filled"
                  multiline
                  minRows={3}
                  maxRows={8}
                  sx={{ width: "50%" }}
                  name="projectSummary"
                  value={input.projectSummary}
                  onChange={(event) => handleInputChange(index, event)}
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
                      name="skillsUsed"
                    />
                  )}
                  onChange={(event, values) => {
                    projectInputFields[index].skillsUsed = values;
                  }}
                  sx={{ margin: "15px 0", width: "50%" }}
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
                  sx={{ margin: "15px 0" }}
                  name="deployedLink"
                  value={input.deployedLink}
                  onChange={(event) => handleInputChange(index, event)}
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
                  sx={{ margin: "15px 0" }}
                  name="gitHubLink"
                  value={input.gitHubLink}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
            );
          })}
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "skyblue",
              "&:hover": {
                backgroundColor: "deepskyblue",
              },
            }}
            onClick={addProjFields}
          >
            Add Project
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ProjectsSection;
