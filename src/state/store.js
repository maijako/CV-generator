import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile';
import projectReducer from './project';
import technologiesReducer from './technologies';
//import reducers here

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    project: projectReducer,
    technologies: technologiesReducer,
   //add reducers here
  }
})