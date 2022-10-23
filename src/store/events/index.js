import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
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
      state.loading = false;
    },

    clearEvents: (state) => {
      state.data = [];
      state.loading = true;
    },

    eventUser: (state, action) => {
      state.eventUser = action.payload;
    },

    eventEdit: (state, action) => {
      state.edit = action.payload;
    },

    idCollector: (state, action) => {
      state.eventId = action.payload;
    },

    removeEdit: (state) => {
      state.edit = null;
    },
  },
});

export const { eventAdd, eventEdit, removeEdit, idCollector, clearEvents } =
  eventsSlice.actions;

export default eventsSlice.reducer;
