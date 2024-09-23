import { Point, RootState } from "../../utils/types";
import { endStroke } from "../sharedActions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000",
  width: 5,
};
const currentStrokeSlice = createSlice({
  name: "currentStroke",
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      state.points = [action.payload];
    },
    updateStroke: (state, action: PayloadAction<Point>) => {
      state.points.push(action.payload);
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setStrokeWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});

export const reducer = currentStrokeSlice.reducer;
export const { beginStroke, updateStroke, setStrokeColor, setStrokeWidth } =
  currentStrokeSlice.actions;
export const currentStrokeSelector = (state: RootState) => state.currentStroke;
