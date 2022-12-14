import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },

  reducers: {
    getOrder: (state, action) => {
      state.order = {
        ...state.order,
        ...action.payload,
      };
    },
    // updateOrder: (state, action) => {
    //   return [...state, action.payload.data];
    // },
    // removeOrder: (state, action) => {
    //   state.list = state.list.filter((item) => item.id != action.payload.id);
    // },
    // setLoginError: (state, action) => {
    //   state.loginError = action.payload;
    // },
  },
});

export const { getOrder } = slice.actions;
export default slice.reducer;
