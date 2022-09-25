import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  edit: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventAdd: (state, action) => {
      state.data = action.payload;
    },
    eventEdit: (state, action) => {
      state.edit = action.payload;
    },
    removeEdit: (state) => {
      state.edit = null;
    },
  },
});

export const { eventAdd, eventEdit, removeEdit } = eventsSlice.actions;

export default eventsSlice.reducer;
