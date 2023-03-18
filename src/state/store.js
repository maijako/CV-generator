import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile';
import projectReducer from './project';
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    project: projectReducer
    // filters: filtersReducer
  }
})