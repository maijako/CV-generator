import { createSlice } from "@reduxjs/toolkit";

const technologiesSlice = createSlice({
  name: 'technologies',
  initialState: { technologies: [] },
  reducers: {
    setTechnologies(state, action) {
      state.technologies = action.payload.technologies
    },
  }
})

export const { setTechnologies} = technologiesSlice.actions
export default technologiesSlice.reducer