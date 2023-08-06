import { useState, useEffect } from "react";
import runCanvasAnimation from "./backgroundCanvasController";

function BackgroundCanvas() {
  //This is a full screen canvas that will be used to draw the background
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
    runCanvasAnimation(width, height);
  }, [width, height]);

  return (
    <>
      <canvas id="background-canvas"></canvas>
    </>
  );
}

export default BackgroundCanvas;
