import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { beginStroke, updateStroke } from "./modules/currentStroke/slice";
import { endStroke } from "./modules/sharedActions";
import { currentStrokeSelector } from "./modules/currentStroke/slice";
import { historyIndexSelector } from "./modules/historyIndex/slice";
import { strokesSelector } from "./modules/strokes/slice";
import { clearCanvas, drawStroke, setCanvasSize } from "./utils/canvasUtils";
import { useCanvas } from "./CanvasContext";
import { Toaster } from "react-hot-toast";
import { SidePanel } from "./components/SidePanel";
import useWindowHeight from "./utils/useWindowSize";

const WIDTH = 2000;
const HEIGHT = 2000;

function App() {
  const canvasRef = useCanvas();
  const dispatch = useDispatch();
  const currentStroke = useSelector(currentStrokeSelector);
  const historyIndex = useSelector(historyIndexSelector);
  const strokes = useSelector(strokesSelector);
  // !! number to bool
  const isDrawing = !!currentStroke.points.length;
  const windowHeight = useWindowHeight()

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return {
      canvas,
      context: canvas?.getContext("2d"),
    };
  };

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();

    if (!canvas || !context) {
      return;
    }

    setCanvasSize(canvas, WIDTH, HEIGHT);

    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";

    clearCanvas(canvas);
  }, []);

  useEffect(() => {
    const { context } = getCanvasWithContext();

    if (!context) {
      return;
    }

    requestAnimationFrame(() =>
      drawStroke(context, currentStroke.points, currentStroke.color),
    );
  }, [currentStroke]);

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();

    if (!canvas || !context) {
      return;
    }

    requestAnimationFrame(() => {
      clearCanvas(canvas);

      strokes.slice(0, strokes.length - historyIndex).forEach((stroke) => {
        drawStroke(context, stroke.points, stroke.color);
      });
    });
  }, [historyIndex]);

  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke({ x: offsetX, y: offsetY }));
  };

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke({ x: offsetX, y: offsetY }));
  };

  const endDrawing = () => {
    if (isDrawing) {
      dispatch(endStroke({ historyIndex, stroke: currentStroke }));
    }
  };

  return (
    <div className="main-container">
      <div className="window container">
        <div className="title-bar">
          <div className="title-bar-text">98 Paint</div>
          <div className="title-bar-controls">
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body canvas-container">
          <SidePanel />
          <div className="canvas" style={{ maxHeight: windowHeight - 40 }}>
            <canvas
              onMouseDown={startDrawing}
              onMouseUp={endDrawing}
              onMouseOut={endDrawing}
              onMouseMove={draw}
              ref={canvasRef}
            />
          </div>
        </div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </div>
  );
}

export default App;
