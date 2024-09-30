export type RootState = {
  currentStroke: Stroke;
  strokes: Stroke[];
  historyIndex: number;
  colors: Color;
};

export type Stroke = {
  points: Point[];
  color: string;
  width: number;
};

export type Point = {
  x: number;
  y: number;
};

export type Color = {
  primaryColor: string;
  secondaryColor: string;
  currentSelected: "PRIMARY" | "SECONDARY"
}
