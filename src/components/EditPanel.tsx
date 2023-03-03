import React from "react";
import { useDispatch } from "react-redux";
import { redo, undo } from "../actions";

export const EditPanel = () => {
  const dispatch = useDispatch();

  return (
    <div className="window edit">
      <div className="title-bar">
        <div className="title-bar-text">Edit</div>
      </div>
      <div className="window-body">
        <div className="field-row">
          <button onClick={() => dispatch(undo())} className="button undo">
            Undo
          </button>
          <button onClick={() => dispatch(redo())} className="button redo">
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};
