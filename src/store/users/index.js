import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  edit: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = action.payload;
    },
    edit: (state, action) => {
      state.edit = action.payload;
    },
    removeEdit: (state) => {
      state.edit = null;
    },
  },
});

export const { add, edit, removeEdit } = usersSlice.actions;

export default usersSlice.reducer;
