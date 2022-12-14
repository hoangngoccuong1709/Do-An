import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "subscribe",
  initialState: {
    list: [],
    isLoading: false,
    error: false,
  },

  reducers: {
    setList: (state, action) => {
      state.list = [...action.payload.data];
    },
    addNew: (state, action) => {
      state.list.push(action.payload.data);
    },
    updateSub: (state, action) => {
      return [...state, action.payload.data];
    },
    removeSub: (state, action) => {
      state.list = state.list.filter((item) => item.id != action.payload.id);
    },
    sendEmail: (state, action) => {
      state.list.push(action.payload.data);
    },
  },
});

export const actions = slice.actions;

export default slice.reducer;
