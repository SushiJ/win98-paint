import { useCanvas } from "../CanvasContext";
import { saveAs } from "file-saver";
import { getCanvasImage } from "../utils/canvasUtils";

export const FilePanel = () => {
  const canvasRef = useCanvas();

  const exportToFile = () => {
    getCanvasImage(canvasRef.current)
      .then((file) => {
        if (!file) {
          return;
        }
        saveAs(file, "drawing.png");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="window file">
      <div className="title-bar">
        <div className="title-bar-text">File </div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button className="save-button" onClick={exportToFile}>
            Export
          </button>
        </div>
      </div>
    </div>
  );
};
