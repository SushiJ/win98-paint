import { reducer as strokes } from "./modules/strokes/reducer";
import { reducer as currentStroke } from "./modules/currentStroke/reducer";
import { reducer as historyIndex } from "./modules/historyIndex/reducers";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

export const store = createStore(
  combineReducers({ historyIndex, currentStroke, strokes }),
  composeWithDevToolsDevelopmentOnly(applyMiddleware(logger))
);
