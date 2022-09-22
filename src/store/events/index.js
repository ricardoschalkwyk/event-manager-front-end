import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  edit: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    add: (state, action) => {
      state.data = action.payload;
    },
    edit: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { add, edit } = eventsSlice.actions;

export default eventsSlice.reducer;
