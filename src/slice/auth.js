import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //LOGIN
    userLoginStart: (state) => {
      state.isLoading = true;
    },
    userLoginSuccess: () => {},
    userLoginFailure: () => {},

    // REGISTER
    userRegisterStart: (state) => {
      state.isLoading = true;
    },
    userRegisterSuccess: () => {},
    userRegisterFailure: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { userLoginStart, userRegisterStart } = authSlice.actions;

export default authSlice.reducer;
