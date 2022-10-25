import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;

      // Then if it does exist the token is given to a user when logged in
      // Then it will be saved to localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    updateUser: (state, action) => {
      state.user = action.payload;

      // Then if it does exist the token is given to a user when logged in
      // Then it will be saved to localStorage
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { login, updateUser } = authSlice.actions;

export default authSlice.reducer;
