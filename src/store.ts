import { reducer as strokes } from "./modules/strokes/slice";
import { reducer as currentStroke } from "./modules/currentStroke/slice";
import { reducer as historyIndex } from "./modules/historyIndex/slice";
import { reducer as colors } from "./modules/colors/slice";
// import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStroke,
    strokes,
    colors
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  // .concat(logger),
})
