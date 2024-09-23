import { useDispatch } from "react-redux";
import { setStrokeWidth } from "../modules/currentStroke/slice";

const WIDTH = [
  5,
  10,
  15,
  20
];

export const StrokeWidthPanel = () => {
  const dispatch = useDispatch();

  const onWidthChange = (width: number) => {
    dispatch(setStrokeWidth(width));
  };

  return (
    <div className="">
      <div className="window-body">
        {WIDTH.map((w: number) => (
          <div
            key={w}
            onClick={() => {
              onWidthChange(w);
            }}
            className="color"
          >
            <pre>{w}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};
