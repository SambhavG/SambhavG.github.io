import "./App.css";
import BackgroundCanvas from "./BackgroundCanvas";
import FancySwitch from "./FancySwitch";
import { useState } from "react";
import Carousel from "./Carousel";
import Stack from "./Stack";
import Spacer from "./Spacer";
//import react-icons
import { FaGithub, FaLinkedin, FaInstagram, FaEmail } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";

function App() {
  //const [isMobile, _] = useState(true);
  const [isMobile, _] = useState(window.innerWidth < 1000);
  return (
    <div className="app" id="app">
      <BackgroundCanvas className="background-canvas-component" stopDots={false} />
      <div className="content">
        <Spacer height="5em" />
        <div className="header">Sambhav Gupta</div>
        <Spacer height="4em" />
        <div className="main-statement">
          I study math, computer science, and machine learning at Stanford <br />
          I've worked at Amazon, The Amherst Group, and a contech startup
        </div>
        <Spacer height="2em" />
        <div className="socials">
          <a href={process.env.PUBLIC_URL + "/Resume July 2023-5.pdf"} target="_blank" rel="noreferrer">
            <HiOutlineDocumentText className="social-icon" />
          </a>
          <a href="https://github.com/sambhavg" target="_blank" rel="noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/sambhav-g/" target="_blank" rel="noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/sambhavgupta159/" target="_blank" rel="noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          {/* //email */}
          <a href="samgupta@stanford.edu" target="_blank" rel="noreferrer">
            <HiOutlineMail
              onClick={(e) => {
                window.location.href = "mailto:samgupta@stanford.edu";
              }}
              className="social-icon"
            />
          </a>
        </div>
        <Spacer height="3em" />
        <div className="projects-container">{isMobile ? <Stack /> : <Carousel />}</div>
        {isMobile ? <></> : <div className="drag-statement">← drag →</div>}

        {/* <FancySwitch className="fancy-switch-component" onChange={handleSwitchChange} /> */}
      </div>
    </div>
  );
}

export default App;
