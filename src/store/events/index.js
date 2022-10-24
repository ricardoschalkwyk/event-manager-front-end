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
    // This action adds events to the data array
    eventAdd: (state, action) => {
      state.data = action.payload;
      // False when adding new events
      state.loading = false;
    },

    // This action will clear the data array
    clearEvents: (state) => {
      state.data = [];
      // True when removing events
      state.loading = true;
    },

    eventUser: (state, action) => {
      // This action creates an object
      state.eventUser = action.payload;
    },

    eventEdit: (state, action) => {
      // This action creates an object
      state.edit = action.payload;
    },

    idCollector: (state, action) => {
      // This action stores ID's
      state.eventId = action.payload;
    },

    removeEdit: (state) => {
      // This action removes an item
      state.edit = null;
    },
  },
});

export const { eventAdd, eventEdit, removeEdit, idCollector, clearEvents } =
  eventsSlice.actions;

export default eventsSlice.reducer;
