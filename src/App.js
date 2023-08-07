import "./App.css";
import BackgroundCanvas from "./BackgroundCanvas";

function App() {
  return (
    <div class="App" id="app">
      <BackgroundCanvas class="background-canvas-component" />
      <div class="content">
        <div class="header">Sambhav Gupta</div>

        <div class="main-statement">
          Hello, I'm Sambhav. <br />
          I'm a student, a software engineer, and ML enthusiast. <br />I study math, computer science, and machine
          learning at Stanford. <br />
          I've worked at Amazon, The Amherst Group, and a contech startup. <br />
        </div>
      </div>
    </div>
  );
}

export default App;
