import { useSelector, useDispatch } from "react-redux";
import { redo, undo } from "../modules/historyIndex/slice";
import { strokesLengthSelector } from "../modules/strokes/slice";

export const EditPanel = () => {
  const dispatch = useDispatch();
  const undoLimit = useSelector(strokesLengthSelector);
  return (
    <div className="window edit">
      <div className="title-bar">
        <div className="title-bar-text">Edit</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button onClick={() => dispatch(undo(undoLimit))} className="button">
            Undo
          </button>
          <button onClick={() => dispatch(redo())} className="button">
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};
