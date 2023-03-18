import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile';
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    // filters: filtersReducer
  }
})