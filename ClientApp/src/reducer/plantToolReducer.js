import { createSlice, isFulfilled } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "tool",
  initialState: {
    tool: [],
    Error: null,
  },
  reducers: {
    getTool: (state, action) => {
      state.tool = {
        ...state.tool.payload,
        ...action.payload,
      };
    },
    setError: (state, action) => {
      state.Error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTool, setError } = userSlice.actions;

export default userSlice.reducer;
