import { RootState } from "../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RootState["colors"] = {
  primaryColor: "#000",
  secondaryColor: "white",
  currentSelected: "PRIMARY"
};

const colorSlice = createSlice({
  name: "colorSlice",
  initialState,
  reducers: {
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    setCurrentSelected: (state, action: PayloadAction<"PRIMARY" | "SECONDARY">) => {
      state.currentSelected = action.payload
    }
  },
});

export const reducer = colorSlice.reducer;
export const { setPrimaryColor, setSecondaryColor, setCurrentSelected } =
  colorSlice.actions;
export const primaryColorSelector = (state: RootState) => state.colors.primaryColor;
export const secondaryColorSelector = (state: RootState) => state.colors.secondaryColor;
export const currentColorSelected = (state: RootState) => state.colors.currentSelected;
