import { useCanvas } from "../CanvasContext";
import toast from "react-hot-toast";
import { useState } from "react";
import { Modal } from "./Modal";

type PNG = "png";
type JPG = "jpg";
type JPEG = "jpeg";

type Extention = PNG | JPG | JPEG;

const MAGIC_NUMBER = 110108; // if blob.size === MAGIC_NUMBER, then the canvas is empty

export const ExportButton = () => {
  const canvasRef = useCanvas();
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false);

  const [ext, setExt] = useState<Extention>("png");
  const [fileName, setFileName] = useState<string>("drawing");

  function toggleModal() {
    setIsModelOpen(!isModalOpen);
  }

  const exportToFile = () => {
    if (!canvasRef.current) {
      toast.error("Failed to get reference to canvas", {
        style: {
          border: "1px solid #ff0081",
          color: "#ff0081",
          fontSize: "12px",
        },
        iconTheme: {
          primary: "#ff0081",
          secondary: "#fdffff",
        },
      });
      return;
    }
    const reader = new FileReader();
    canvasRef.current.toBlob((blob) => {
      if (!blob) {
        return;
      }
      console.log(blob.size);
      if (blob.size === MAGIC_NUMBER) {
        toast.error("Nothing to export", {
          style: {
            border: "1px solid #ff0081",
            color: "#ff0081",
            fontSize: "12px",
          },
          iconTheme: {
            primary: "#ff0081",
            secondary: "#fdffff",
          },
        });
        return;
      }
      // reader.readAsDataURL(blob);
      // reader.onloadend = function() {
      //   const ImageBase64 = reader.result;
      //   const a = document.createElement("a");
      //   if (!ImageBase64) return;
      //   const b64 = ImageBase64.toString().split(";")[1];
      //   const image = `data:image/${ext};${b64}`;
      //   console.log(image);
      //   a.href = image.toString();
      //   a.download = `${fileName}`;
      //   setTimeout(() => a.click(), 500);
      //   toast.success("Exporting...", {
      //     style: {
      //       border: "1px solid #010081",
      //       color: "#008080",
      //       fontSize: "12px",
      //     },
      //     iconTheme: {
      //       primary: "#008080",
      //       secondary: "#fdffff",
      //     },
      //   });
      // };
    });
  };

  return (
    <div className="file">
      <div className="window-body">
        <div className="field-row">
          <button className="save-button" onClick={toggleModal}>
            Save as
          </button>
        </div>
        {isModalOpen && (
          <Modal>
            <div>
              <label htmlFor="save-as">Save as : </label>
              <input
                type="text"
                placeholder="Save as..."
                id="save-as"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
              <select
                onChange={(e) => setExt(e.target.value as Extention)}
                style={{
                  backgroundColor: "white",
                  color: "#222222",
                }}
              >
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="jpeg">JPEG</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                width: "full",
                justifyContent: "end",
                padding: "0.25rem",
                marginTop: "0.25rem",
              }}
            >
              <button onClick={toggleModal}>Cancel</button>
              <button
                onClick={() => {
                  exportToFile();
                  toggleModal();
                }}
              >
                Export
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
