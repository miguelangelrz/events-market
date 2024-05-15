import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectionsState } from "../types/SelectionsState.ts";
import { MarketSelection } from "../types/MarketSelection.ts";

const initialState: SelectionsState = {
  selections: [],
};

export const selectionsSlice = createSlice({
  name: "selections",
  initialState: initialState,
  reducers: {
    addSelection: (state, action: PayloadAction<MarketSelection>) => {
      state.selections.push(action.payload);
    },
    removeSelection: (state, action: PayloadAction<string>) => {
      state.selections = state.selections.filter(
        (selection) => selection.id !== action.payload,
      );
    },
  },
});

const selectionsReducer = selectionsSlice.reducer;
export default selectionsReducer;
