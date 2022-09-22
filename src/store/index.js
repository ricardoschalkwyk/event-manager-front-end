import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./events";
import authReducer from "./auth";
import usersReducer from "./users";

export const store = configureStore({
  reducer: { auth: authReducer, events: eventsReducer, users: usersReducer },
});
