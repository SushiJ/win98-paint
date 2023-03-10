import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../utils/types";
import { endStroke } from "../sharedActions";

const historyIndexSlice = createSlice({
  name: "historyIndex",
  initialState: 0,
  reducers: {
    undo: (state, action: PayloadAction<number>) => {
      return Math.min(state + 1, action.payload);
    },
    redo: (state) => {
      return Math.max(state - 1, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, () => {
      return 0;
    });
  },
});
export const reducer = historyIndexSlice.reducer;
export const { undo, redo } = historyIndexSlice.actions;
export const historyIndexSelector = (state: RootState) => state.historyIndex;
