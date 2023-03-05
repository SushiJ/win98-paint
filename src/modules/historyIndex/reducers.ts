import { RootState } from "../../utils/types";
import { HistoryIndexAction, UNDO, REDO, END_STROKE } from "./actions";

export const reducer = (
  state: RootState["historyIndex"] = 0,
  action: HistoryIndexAction
) => {
  if (action.type === END_STROKE) {
    return 0;
  }
  if (action.type === UNDO) {
    return Math.min(state + 1, action.payload);
  }
  if (action.type === REDO) {
    return Math.max(state - 1, 0);
  }
  return state;
};

export const historyIndexSelector = (state: RootState) => state.historyIndex;
