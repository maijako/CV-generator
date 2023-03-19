import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
  name: 'experience',
  initialState: { experiences: [] },
  reducers: {
    setExperiences(state, action) {
      state.experiences = action.payload.experiences;
    },
  },
});

export const { setExperiences } = experienceSlice.actions;
export default experienceSlice.reducer;