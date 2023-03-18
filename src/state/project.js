import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: [{
      projectTitle: "",
      projectSummary: "",
      skillsUsed: null,
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
        }
    }
})

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
//export const { setProject, setProperty } = projectSlice.actions;
export default projectSlice.reducer;