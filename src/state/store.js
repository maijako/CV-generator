import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile';
import projectReducer from './project';
import technologiesReducer from './technologies';
import summaryReducer from './summary';
import experienceReducer from './experience';
import educationReducer from './education';
//import reducers here

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    project: projectReducer,
    technologies: technologiesReducer,
    summary: summaryReducer,
    experience: experienceReducer,
    education: educationReducer,
   //add reducers here
  }
})