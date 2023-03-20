import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
          firstName:"", 
          lastName:"", 
          email:"", 
          phone:"",
          userLocation: "",
          userNameLinkedIn:"",
          userNameGitHub:"",
          webPortfolio: ""
        },
  reducers: {
    // this sets the entire profile object
    setProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.userLocation = action.payload.userLocation;
            state.userNameLinkedIn = action.payload.userNameLinkedIn;
            state.userNameGitHub = action.payload.userNameGitHub;
            state.webPortfolio = action.payload.webPortfolio;
    },
  }
})

export const { setProfile } = profileSlice.actions
export default profileSlice.reducer
