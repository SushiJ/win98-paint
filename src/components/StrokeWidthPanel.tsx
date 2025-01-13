import { useDispatch } from "react-redux";
import { setStrokeWidth } from "../modules/currentStroke/slice";

const WIDTH = [5, 10, 15, 20];

export const StrokeWidthPanel = () => {
  const dispatch = useDispatch();

  const onWidthChange = (width: number) => {
    dispatch(setStrokeWidth(width));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        gridTemplateColumns: "1fr 1fr",
        margin: "0.5rem 0",
      }}
    >
      {WIDTH.map((w: number) => (
        <RenderSquare width={w} key={w} onClick={() => onWidthChange(w)} />
      ))}
    </div>
  );
};

function RenderSquare(props: { width: number; onClick: () => void }) {
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "white",
        padding: ".25rem",
        width: "20px",
        height: "20px",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      <div
        style={{
          height: props.width,
          width: props.width,
          backgroundColor: "black",
          borderRadius: "100%",
        }}
      />
    </div>
  );
}
