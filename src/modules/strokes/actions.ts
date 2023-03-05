import { Stroke } from "../../utils/types";

export const END_STROKE = "END_STROKE";

export type Action = {
  type: typeof END_STROKE;
  payload: { stroke: Stroke; historyIndex: number };
};

export const endStroke = (stroke: Stroke, historyIndex: number) => {
  return { type: END_STROKE, payload: { historyIndex, stroke } };
};
