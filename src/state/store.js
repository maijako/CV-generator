import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile';
import projectReducer from './project';
import skillsReducer from './skills';
//import reducers here

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    project: projectReducer,
    skills: skillsReducer,
   //add reducers here
  }
})