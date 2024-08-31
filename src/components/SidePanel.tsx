import { ColorPanel } from "./ColorPanel";
import { EditPanel } from "./EditPanel";
import { FilePanel } from "./FilePanel";

export function SidePanel() {
  return (
    <div>
      {/* <div className="controls"> */}
      {/*   <ColorPanel /> */}
      {/*   <div className="tools"> */}
      {/*     <EditPanel /> */}
      {/*     <FilePanel /> */}
      {/*   </div> */}
      {/* </div> */}
      <ColorPanel />
      <EditPanel />
      <FilePanel />
    </div>
  );
}
