import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
  name: 'education',
  initialState: [{
        uniName: "",
        courseName: "",
        degreeLevel: "",
        startDate: "",
        endDate: "",
      }],
  
  reducers: {
    setNewEducation(state, action) {
        const { newEducation } = action.payload;
        state.push(newEducation);
    },
    deleteEducation(state, action) {
      const { educationIndex } = action.payload;
      console.log("Education Index");
      console.log(educationIndex);
      state.splice(educationIndex, 1);
    },
    setUniName(state, action) {
      const { educationIndex, uniName } = action.payload;
      state[educationIndex].uniName = uniName;
    },
    setCourseName(state, action) {
      const { educationIndex, courseName } = action.payload;
      state[educationIndex].courseName = courseName;
    },
    setDegreeLevel(state, action) {
      const { educationIndex, degreeLevel } = action.payload;
      state[educationIndex].degreeLevel = degreeLevel;
    },
    setStartDate(state, action) {
      const { educationIndex, startDate } = action.payload;
      state[educationIndex].startDate = startDate;
    },
    setEndDate(state, action) {
      const { educationIndex, endDate } = action.payload;
      state[educationIndex].endDate = endDate;
    },
  },
});

export const setNewEducation = (newEducation) => ({
    type: 'education/setNewEducation',
    payload: {
        newEducation
    }
});

export const deleteEducation = (educationIndex) => ({
  type: 'education/deleteEducation',
  payload: {
    educationIndex
  }
});

export const setUniName = (educationIndex, uniName ) => ({
    type: 'education/setUniName',
    payload: {
        educationIndex,
        uniName
    }
});

export const setCourseName = (educationIndex, courseName ) => ({
    type: 'education/setCourseName',
    payload: {
        educationIndex,
        courseName
    }
});

export const setDegreeLevel = (educationIndex, degreeLevel ) => ({
    type: 'education/setDegreeLevel',
    payload: {
        educationIndex,
        degreeLevel
    }
});

export const setStartDate = (educationIndex, startDate ) => ({
    type: 'education/setStartDate',
    payload: {
        educationIndex,
        startDate
    }
});

export const setEndDate = (educationIndex, endDate ) => ({
    type: 'education/setEndDate',
    payload: {
        educationIndex,
        endDate
    }
});


export default educationSlice.reducer;