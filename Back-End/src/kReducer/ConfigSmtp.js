import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "configSmtp",
  initialState: {
    list: [],
  },

  reducers: {
    setList: (state, action) => {
      state.list = [...action.payload.data];
    },
    addNew: (state, action) => {
      state.list.push(action.payload.data);
    },
    updateConfig: (state, action) => {
      return [...state, action.payload.data];
    },
    removeConfig: (state, action) => {
      state.list = state.list.filter((item) => item.id != action.payload.id);
    },
  },
});

export const actions = slice.actions;

export default slice.reducer;
