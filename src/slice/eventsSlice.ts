import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventsState } from "../types/EventsState.ts";
import { SportEvent } from "../types/SportEvent.ts";

export const getEvents = createAsyncThunk<SportEvent[], void>(
  "events/getEvents",
  async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/5fff4edb-8f5c-4dd6-a305-2935268be086",
    );
    const data = await response.json();
    return data as SportEvent[];
  },
);

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

const eventsReducer = eventsSlice.reducer;
export default eventsReducer;
