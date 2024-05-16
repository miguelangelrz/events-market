import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slice/eventsSlice.ts";
import selectionsReducer from "./slice/selectionsSlice.ts";

const store = configureStore({
  reducer: { events: eventsReducer, userSelections: selectionsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
