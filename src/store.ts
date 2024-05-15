import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slice/eventsSlice.ts";

const store = configureStore({
  reducer: { events: eventsReducer },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
