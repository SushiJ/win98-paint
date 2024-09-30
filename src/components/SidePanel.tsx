import { ColorPanel } from "./ColorPanel";
import { UndoRedoButton } from "./UndoRedoButton";
import { ExportButton } from "./ExportButton";
import { StrokeWidthPanel } from "./StrokeWidthPanel";
import { ColorTogglePanel } from "./ColorToggle";

export function SidePanel() {
  return (
    <div className="window">
      <div className="window-body">
        <ColorPanel />
        <ColorTogglePanel />
        <StrokeWidthPanel />
        <ExportButton />
        <UndoRedoButton />
      </div>
    </div>
  );
}
