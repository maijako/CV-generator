import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {firstName: "", lastName: "", email: "", phone: ""},
  //these are the reducers we are importing to store.js as profileReducer:
  reducers: {
    // this sets the entire profile object 
    setProfile(state, action) {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.phone = action.payload.phone
    },
  }
})

export const { setProfile } = profileSlice.actions
export default profileSlice.reducer