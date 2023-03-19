import { createSlice } from "@reduxjs/toolkit";

const summarySlice = createSlice({
  name: 'summary',
  initialState: { summary: [] },
  reducers: {
    setSummary(state, action) {
      state.summary = action.payload.summary
    },
  }
})

export const { setSummary } = summarySlice.actions
export default summarySlice.reducer