import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
      projectTitle: "",
      projectSummary: "",
      skillsUsed: null,
      deployedLink: "",
      gitHubLink: ""},
    
    reducers: {
        // this sets the entire project object
        setProject(state, action) {
                state.projectTitle = action.payload.projectTitle
                state.projectSummary = action.payload.projectSummary
                state.deployedLink = action.payload.deployedLink
                state.gitHubLink = action.payload.gitHubLink
        },
    }
})

export const { setProject } = projectSlice.actions;
export default projectSlice.reducer;