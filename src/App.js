import "./App.css";
import BackgroundCanvas from "./BackgroundCanvas";

function App() {
  return (
    <div className="app" id="app">
      <BackgroundCanvas className="background-canvas-component" />
      <div className="content">
        <div className="header">Sambhav Gupta</div>

        <div className="main-statement">
          Hello, I'm Sambhav. <br />
          I'm a student, software engineer, and ML enthusiast. <br />I study math, computer science, and machine
          learning at Stanford. <br />
          I've worked at Amazon, The Amherst Group, and a contech startup. <br />
        </div>
      </div>
    </div>
  );
}

export default App;
