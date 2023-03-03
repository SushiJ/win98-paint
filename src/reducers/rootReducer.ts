import { Action, BEGIN_STROKE, END_STROKE, SET_STROKE_COLOR, UPDATE_STROKE } from "../actions";
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
  if (action.type === SET_STROKE_COLOR) {
    return {
      ...state,
      currentStroke: {
        ...state.currentStroke,
        ...{ color: action.payload }
      }
    }
  }
  return state;
};

export const currentStrokeSelector = (state: RootState) => {
  return state.currentStroke
}
