import React, { useState } from "react";
import Canvas from "./Canvas";
import "./Container.css";

const Container = () => {
  const [color, changeColor] = useState("#8BACE0");

  return (
    <div className="container">
      <div className="title-container">
        <h1>Scribble Pad</h1>
      </div>
      <div className="input-container">
        <input
        id="input-style"
          type="color"
          value={color}
          onChange={(e) => {
            changeColor(e.target.value);
          }}
        />
      </div>
      <div className="canvas-container">
        <Canvas color={color}/>
      </div>
    </div>
  );
};

export default Container;
