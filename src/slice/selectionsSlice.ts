import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectionsState } from "../types/SelectionsState.ts";
import { UserMarketSelection } from "../types/MarketSelection.ts";

const initialState: SelectionsState = {
  selections: [],
};

export const selectionsSlice = createSlice({
  name: "userSelections",
  initialState: initialState,
  reducers: {
    addSelection: (state, action: PayloadAction<UserMarketSelection>) => {
      state.selections.push(action.payload);
    },
    removeSelection: (state, action: PayloadAction<string>) => {
      state.selections = state.selections.filter(
        (selection) => selection.id !== action.payload,
      );
    },
  },
});

export const { addSelection, removeSelection } = selectionsSlice.actions;

const selectionsReducer = selectionsSlice.reducer;
export default selectionsReducer;
