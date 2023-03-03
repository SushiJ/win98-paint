import {
  Action,
  BEGIN_STROKE,
  END_STROKE,
  REDO,
  SET_STROKE_COLOR,
  UNDO,
  UPDATE_STROKE,
} from "../actions";
import { RootState } from "../utils/types";

const initialState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: [],
  historyIndex: 0,
};
export const rootReducer = (
  state: RootState = initialState,
  action: Action
) => {
  if (action.type === BEGIN_STROKE) {
    return {
      ...state,
      currentStroke: {
        ...state.currentStroke,
        points: [action.payload],
      },
    };
  }
  if (action.type === UPDATE_STROKE) {
    return {
      ...state,
      currentStroke: {
        ...state.currentStroke,
        points: [...state.currentStroke.points, action.payload],
      },
    };
  }
  if (action.type === END_STROKE) {
    if (!state.currentStroke.points.length) {
      return state;
    }
    const historyIndex = (state.strokes.length - state.historyIndex);
    return {
      ...state,
      historyIndex: 0,
      currentStroke: { ...state.currentStroke, points: [] },
      strokes: [...state.strokes.slice(0, historyIndex), state.currentStroke],
    };
  }
  if (action.type === SET_STROKE_COLOR) {
    return {
      ...state,
      currentStroke: {
        ...state.currentStroke,
        ...{ color: action.payload },
      },
    };
  }
  if (action.type === UNDO) {
    const historyIndex = Math.min(state.historyIndex + 1, state.strokes.length);
    return { ...state, historyIndex };
  }
  if (action.type === REDO) {
    const historyIndex = Math.max(state.historyIndex - 1, 0);
    return { ...state, historyIndex };
  }
  return state;
};

export const currentStrokeSelector = (state: RootState) => state.currentStroke;
export const historyIndexSelector = (state: RootState) => state.historyIndex;
export const strokesSelector = (state: RootState) => state.strokes;
