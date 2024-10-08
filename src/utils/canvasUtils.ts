import { Point } from "./types";

export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
};

export const setCanvasSize = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number
) => {
  // const dpr = window.devicePixelRatio;
  // const rect = canvas.getBoundingClientRect();

  canvas.width = width * 2;
  canvas.height = height * 2;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.getContext("2d")?.scale(2, 2);
};

export const drawStroke = (
  context: CanvasRenderingContext2D,
  points: Point[],
  color: string,
  width: number = 5
) => {
  if (!points.length) {
    return;
  }
  context.strokeStyle = color;
  context.lineWidth = width;
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  points.forEach((point) => {
    context.lineTo(point.x, point.y);
    context.stroke();
  });
  context.closePath();
};
