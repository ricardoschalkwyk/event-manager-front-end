import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  eventUser: null,
  edit: null,
  eventId: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventAdd: (state, action) => {
      state.data = action.payload;
    },

    eventUser: (state, action) => {
      state.eventUser = action.payload;
    },

    eventEdit: (state, action) => {
      state.edit = action.payload;
    },

    eventId: (state, action) => {
      state.eventId = action.payload;
    },

    removeEdit: (state) => {
      state.edit = null;
    },
  },
});

export const { eventAdd, eventEdit, removeEdit, eventId } = eventsSlice.actions;

export default eventsSlice.reducer;
