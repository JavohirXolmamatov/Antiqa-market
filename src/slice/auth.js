import { createSlice } from "@reduxjs/toolkit";
// import AuthLocalStorage from "../helpers/localstorage";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSignStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
      state.loggedIn = false;
    },
    userSignSuccess: (state, actions) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = actions.payload;
      // AuthLocalStorage.setItem("token", actions.payload.user.id);
    },
    userSignFailure: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const { userSignStart, userSignSuccess, userSignFailure } =
  authSlice.actions;

export default authSlice.reducer;
