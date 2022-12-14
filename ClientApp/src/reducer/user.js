import { createSlice, isFulfilled } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    register: false,
    account: null,
    loginError: null,
    tokenChecked: false,
  },
  reducers: {
    setAccount: (state, action) => {
      state.account = {
        ...state.account,
        ...action.payload,
      };
    },
    setRegister: (state, action) => {
      state.register = action.payload;
      // state.register = {
      //   ...state.register,
      //   ...action.payload,
      // };
    },
    setLoginError: (state, action) => {
      return { message: action.payload };
    },
    // setLoginError: (state, action) => {
    //   state.loginError = action.payload;
    // },
    tokenChecked: (state, action) => {
      state.tokenChecked = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.account = null;
      // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.tokenChecked = null;
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccount, setLoginError, tokenChecked, logout, setRegister } =
  userSlice.actions;

export default userSlice.reducer;
