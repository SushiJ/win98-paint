import { useCanvas } from "../CanvasContext";
import { saveAs } from "file-saver";
import { getCanvasImage } from "../utils/canvasUtils";
import toast from "react-hot-toast";

export const FilePanel = () => {
  const canvasRef = useCanvas();

  const exportToFile = () => {
    getCanvasImage(canvasRef.current)
      .then((file) => {
        if (!file) {
          return;
        }
        toast.success("Exporting....", {
          style: {
            border: "1px solid #010081",
            color: "#010081",
            fontSize: "12px",
          },
          iconTheme: {
            primary: "#010081",
            secondary: "#fdffff",
          },
        });
        setTimeout(() => saveAs(file, "drawing.png"), 1000);
      })
      .catch((err) =>
        toast.error(err, {
          style: {
            border: "1px solid #ff0081",
            color: "#ff0081",
            fontSize: "12px",
          },
          iconTheme: {
            primary: "#ff0081",
            secondary: "#fdffff",
          },
        })
      );
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
