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
    if (!stopDots) {
      runCanvasAnimation(width, height);
    }
  }, [width, height, stopDots]);

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -2,
    backgroundColor: "#0F0F0F",
  };

  return (
    <>
      <div style={backgroundStyle} id="background-canvas-container">
        {!stopDots && <canvas id="background-canvas" style={{ zIndex: -1 }} />}
      </div>
    </>
  );
}

export default BackgroundCanvas;
