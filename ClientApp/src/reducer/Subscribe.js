import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "subscribe",
  initialState: {
    list: [],
    isLoading: false,
    error: false,
  },

  reducers: {
    addNew: (state = slice, action) => {
      state.list.push(action.payload.data);
    },
  },
});

export const actions = slice.actions;

export default slice.reducer;
