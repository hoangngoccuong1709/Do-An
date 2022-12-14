import { createSlice, isFulfilled } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "tree",
  initialState: {
    tree: [],
    Error: null,
  },
  reducers: {
    getTree: (state, action) => {
      state.tree = {
        ...state.tree.payload,
        ...action.payload,
      };
    },
    setError: (state, action) => {
      state.Error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTree, setError } = userSlice.actions;

export default userSlice.reducer;
