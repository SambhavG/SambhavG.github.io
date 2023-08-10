import { useState, useEffect } from "react";
import runCanvasAnimation from "./backgroundCanvasController";

function BackgroundCanvas({ stopDots }) {
  //This is a full screen canvas that will be used to draw the background
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
    console.log("effect");
    runCanvasAnimation(width, height, stopDots);
  }, [width, height, stopDots]);

  return (
    <>
      <canvas id="background-canvas"></canvas>
    </>
  );
}

export default BackgroundCanvas;
