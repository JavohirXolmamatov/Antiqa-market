import { createSlice } from "@reduxjs/toolkit";

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
    },
    userSignFailure: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userSignStart, userSignSuccess, userSignFailure } =
  authSlice.actions;

export default authSlice.reducer;
