import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { primaryColorSelector, secondaryColorSelector, setCurrentSelected } from "../modules/colors/slice";
import { setStrokeColor } from "../modules/currentStroke/slice";

export const ColorTogglePanel = () => {
  const dispatch = useDispatch();

  const primary = useSelector(primaryColorSelector);
  const secondary = useSelector(secondaryColorSelector);

  function handleClick(type: "PRIMARY" | "SECONDARY") {
    dispatch(setCurrentSelected(type));
    type === "PRIMARY" ? dispatch(setStrokeColor(primary)) : dispatch(setStrokeColor(secondary));
  }

  return (
    <div style={{
      border: "1px solid grey",
      backgroundColor: "white",
      padding: "0.25rem",
      marginBottom: "2px",
      width: "50px",
      height: "50px",
      display: "grid",
      placeContent: "center",
      translate: "13%",
    }} >
      <div style={{
        border: "1px solid black",
        background: primary,
        position: "absolute",
        top: "25%",
        left: "25%",
        height: "20px",
        width: "20px",
        zIndex: "10",
        cursor: "pointer"
      }}
        onClick={() => handleClick("PRIMARY")}
      />
      <div style={{
        border: "1px solid black",
        background: secondary,
        position: "absolute",
        top: "42%",
        left: "36%",
        height: "20px",
        width: "20px",
        translate: "10%",
        cursor: "pointer"
      }}
        onClick={() => handleClick("SECONDARY")}
      />
    </div>
  );
};
