import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  events: [],
  userData: null,
  edit: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdd: (state, action) => {
      state.list = action.payload;
    },

    userDataAdd: (state, action) => {
      state.userData = action.payload;
    },

    eventAdd: (state, action) => {
      state.events = action.payload;
    },

    userEdit: (state, action) => {
      state.edit = action.payload;
    },

    removeEdit: (state) => {
      state.edit = null;
    },
  },
});

export const { userAdd, userDataAdd, eventAdd, userEdit, removeEdit } =
  usersSlice.actions;

export default usersSlice.reducer;
