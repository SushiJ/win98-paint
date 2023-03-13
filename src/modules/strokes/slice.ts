import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../utils/types";
import { endStroke } from "../sharedActions";

const initialStrokes: RootState["strokes"] = [];

const strokeSlice = createSlice({
  name: "strokes",
  initialState: initialStrokes,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state, action) => {
      const { historyIndex, stroke } = action.payload;
      if (historyIndex == 0) {
        state.push(stroke);
      } else {
        state.splice(-historyIndex, historyIndex, stroke);
      }
    });
  },
});
export const reducer = strokeSlice.reducer;

export const strokesLengthSelector = (state: RootState) => state.strokes.length;
export const strokesSelector = (state: RootState) => state.strokes;
