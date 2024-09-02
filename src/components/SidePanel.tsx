import { ColorPanel } from "./ColorPanel";
import { EditPanel } from "./EditPanel";
import { FilePanel } from "./FilePanel";

export function SidePanel() {
  return (
    <div className="window">
      <div className="window-body">
        <ColorPanel />
        <FilePanel />
        <EditPanel />
      </div>
    </div>
  );
}
