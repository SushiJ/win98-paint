export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
};
