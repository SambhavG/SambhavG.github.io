import { useEffect } from "react";
import runCanvasAnimation from "./backgroundCanvasController";

function BackgroundCanvas({ stopDots }) {
  useEffect(() => {
    if (!stopDots) {
      runCanvasAnimation(window.innerWidth, window.innerHeight);
    }
  }, [stopDots]);

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
