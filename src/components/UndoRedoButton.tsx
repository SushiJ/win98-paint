import { useSelector, useDispatch } from "react-redux";
import { useCanvas } from "../CanvasContext";

import { redo, undo } from "../modules/historyIndex/slice";
import { reset, strokesLengthSelector } from "../modules/strokes/slice";
import { clearCanvas } from "../utils/canvasUtils";

export const UndoRedoButton = () => {
  const dispatch = useDispatch();
  const undoLimit = useSelector(strokesLengthSelector);
  const canvas = useCanvas();

  return (
    <div className="edit">
      <div className="window-body">
        <div className="field-row-stacked">
          <button onClick={() => dispatch(undo(undoLimit))} className="button">
            Undo
          </button>
          <button onClick={() => dispatch(redo())} className="button">
            Redo
          </button>
          <button onClick={() => {
            dispatch(reset())
            if (canvas.current) clearCanvas(canvas.current)
          }} className="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
