import { ColorPanel } from "./ColorPanel";
import { UndoRedoButton } from "./UndoRedoButton";
import { ExportButton } from "./ExportButton";
import { StrokeWidthPanel } from "./StrokeWidthPanel";

export function SidePanel() {
  return (
    <div className="window">
      <div className="window-body">
        <ColorPanel />
        <StrokeWidthPanel />
        <ExportButton />
        <UndoRedoButton />
      </div>
    </div>
  );
}
