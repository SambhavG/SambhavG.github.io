import "./App.css";
import BackgroundCanvas from "./BackgroundCanvas";
import FancySwitch from "./FancySwitch";
import { useState } from "react";

function App() {
  const [stopDots, setStopDots] = useState(false);

  function handleSwitchChange() {
    setStopDots(!stopDots);
    console.log(stopDots);
  }

  return (
    <div className="app" id="app">
      <BackgroundCanvas className="background-canvas-component" stopDots={stopDots} />
      <div className="content">
        <div className="header">Sambhav Gupta</div>

        <div className="main-statement">
          Hello, I'm Sambhav <br />
          I study math, cs, and ml at Stanford <br />
          I've worked at Amazon, The Amherst Group, and a contech startup <br />
        </div>

        <FancySwitch className="fancy-switch-component" onChange={handleSwitchChange} />
      </div>
    </div>
  );
}

export default App;
