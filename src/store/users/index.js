import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  edit: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdd: (state, action) => {
      state.list = action.payload;
    },
    userEdit: (state, action) => {
      state.edit = action.payload;
    },
    removeEdit: (state) => {
      state.edit = null;
    },
  },
});

export const { userAdd, userEdit, removeEdit } = usersSlice.actions;

export default usersSlice.reducer;
