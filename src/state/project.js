import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: [{
      projectTitle: "",
      projectSummary: "",
      projectContribution: "",
      skillsUsed: [],
      deployedLink: "",
      gitHubLink: ""
    }],
    
    reducers: {
        setProjectTitle(state, action) {
            const { projectIndex, projectTitle } = action.payload;
            state[projectIndex].projectTitle = projectTitle;
        },
        setProjectSummary(state, action) {
            const { projectIndex, projectSummary } = action.payload;
            state[projectIndex].projectSummary = projectSummary;
        },
        setProjectContribution(state, action) {
            const { projectIndex, projectContribution } = action.payload;
            state[projectIndex].projectContribution = projectContribution;
        },
        setNewProject(state, action) {
            const { newProject } = action.payload;
            state.push(newProject);
        },
        setSkillsUsed(state, action) {
            const { projectIndex, projectSkills } = action.payload;
            state[projectIndex].skillsUsed = projectSkills;
        },
        setDeployedLink(state, action) {
            const { projectIndex, projectWebsite } = action.payload;
            state[projectIndex].deployedLink = projectWebsite;
        },
        setGitHubLink(state, action) {
            const { projectIndex, projectSourceLink } = action.payload;
            state[projectIndex].gitHubLink = projectSourceLink;
        }
    }
})

export const setNewProject = (newProject) => ({
    type: 'project/setNewProject',
    payload: {
        newProject
    }
});

export const setProjectTitle = (projectIndex, projectTitle) => ({
    type: 'project/setProjectTitle',
    payload: {
      projectIndex,
      projectTitle
    }
});
  
export const setProjectSummary = (projectIndex, projectSummary) => ({
    type: 'project/setProjectSummary',
    payload: {
      projectIndex,
      projectSummary
    }
});

export const setProjectContribution = (projectIndex, projectContribution) => ({
    type: 'project/setProjectContribution',
    payload: {
      projectIndex,
      projectContribution
    }
});

export const setSkillsUsed = (projectIndex, projectSkills) => ({
    type: 'project/setSkillsUsed',
    payload: {
      projectIndex,
      projectSkills
    }
});

export const setDeployedLink = (projectIndex, projectWebsite) => ({
    type: 'project/setDeployedLink',
    payload: {
      projectIndex,
      projectWebsite
    }
});

export const setGitHubLink = (projectIndex, projectSourceLink) => ({
    type: 'project/setGitHubLink',
    payload: {
      projectIndex,
      projectSourceLink
    }
});

export default projectSlice.reducer;