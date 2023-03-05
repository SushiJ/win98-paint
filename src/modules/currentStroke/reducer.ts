import {
  Action,
  SET_STROKE_COLOR,
  UPDATE_STROKE,
  END_STROKE,
  BEGIN_STROKE,
} from "./actions";
import { RootState } from "../../utils/types";

const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000",
};
export const reducer = (
  state: RootState["currentStroke"] = initialState,
  action: Action
) => {
  if (action.type === BEGIN_STROKE) {
    return { ...state, points: [action.payload] };
  }
  if (action.type === UPDATE_STROKE) {
    return {
      ...state,
      points: [...state.points, action.payload],
    };
  }
  if (action.type === END_STROKE) {
    return {
      ...state,
      points: [],
    };
  }
  if (action.type === SET_STROKE_COLOR) {
    return {
      ...state,
      color: action.payload,
    };
  }
  return state;
};
export const currentStrokeSelector = (state: RootState) => state.currentStroke;
