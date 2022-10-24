import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "results",
  initialState: {
    result: null,
  },
  reducers: {
    setResults: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const selectResults = (state) => state.counterReducer.result;
// Action creators are generated for each case reducer function
export const { setResults } = counterSlice.actions;

export default counterSlice.reducer;
