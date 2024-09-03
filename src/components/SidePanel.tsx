import { ColorPanel } from "./ColorPanel";
import { UndoRedoButton } from "./UndoRedoButton";
import { ExportButton } from "./ExportButton";

export function SidePanel() {
  return (
    <div className="window">
      <div className="window-body">
        <ColorPanel />
        <ExportButton />
        <UndoRedoButton />
      </div>
    </div>
  );
}
