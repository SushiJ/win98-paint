import { RootState } from "../../utils/types";
import { Action, END_STROKE } from "./actions";

export const reducer = (state: RootState["strokes"] = [], action: Action) => {
  if (action.type === END_STROKE) {
    const { historyIndex, stroke } = action.payload;
    if (!stroke.points.length) {
      return;
    }
    return [...state.slice(0, state.length - historyIndex), stroke];
  }
  return state;
};
export const strokesLengthSelector = (state: RootState) => state.strokes.length;
export const strokesSelector = (state: RootState) => state.strokes;
