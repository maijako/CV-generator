import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
  name: 'experience',
  initialState: [{
        companyName: "",
        jobTitle: "",
        roleDetails: "",
        startDate: "",
        endDate: "",
      }],
  
  reducers: {
    setNewExperience(state, action) {
        const { newExperience } = action.payload;
        state.push(newExperience);
    },
    setCompanyName(state, action) {
      const { experienceIndex, companyName } = action.payload;
      state[experienceIndex].companyName = companyName;
    },
    setJobTitle(state, action) {
      const { experienceIndex, jobTitle } = action.payload;
      state[experienceIndex].jobTitle = jobTitle;
    },
    setRoleDetails(state, action) {
      const { experienceIndex, roleDetails } = action.payload;
      state[experienceIndex].roleDetails = roleDetails;
    },
    setStartDate(state, action) {
      const { experienceIndex, startDate } = action.payload;
      state[experienceIndex].startDate = startDate;
    },
    setEndDate(state, action) {
      const { experienceIndex, endDate } = action.payload;
      state[experienceIndex].endDate = endDate;
    },
  },
});

export const setNewExperience = (newExperience) => ({
    type: 'experience/setNewExperience',
    payload: {
        newExperience
    }
});

export const setCompanyName = (experienceIndex, companyName ) => ({
    type: 'experience/setCompanyName',
    payload: {
        experienceIndex,
        companyName
    }
});

export const setJobTitle = (experienceIndex, jobTitle ) => ({
    type: 'experience/setJobTitle',
    payload: {
        experienceIndex,
        jobTitle
    }
});

export const setRoleDetails = (experienceIndex, roleDetails ) => ({
    type: 'experience/setRoleDetails',
    payload: {
        experienceIndex,
        roleDetails
    }
});

export const setStartDate = (experienceIndex, startDate ) => ({
    type: 'experience/setStartDate',
    payload: {
        experienceIndex,
        startDate
    }
});

export const setEndDate = (experienceIndex, endDate ) => ({
    type: 'experience/setEndDate',
    payload: {
        experienceIndex,
        endDate
    }
});


export default experienceSlice.reducer;