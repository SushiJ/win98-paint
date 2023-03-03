import { Action, BEGIN_STROKE, END_STROKE, UPDATE_STROKE } from "../actions";
import { RootState } from "../utils/types";

const initialState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: [],
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
    return {
      ...state,
      currentStroke: { ...state.currentStroke, points: [] },
      strokes: [...state.strokes, state.currentStroke],
    };
  }
  return state;
};

export const currentStrokeSelector = (state: RootState) => {
  return state.currentStroke
}
