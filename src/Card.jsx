import { FaLink } from "react-icons/fa";
import "./card.css";

function typeToStyle(type) {
  switch (type) {
    case "Project":
      return { boxShadow: ".5em .5em 2em 0  rgba(255, 0, 0, 0.1)" };
    case "Publication":
      return { boxShadow: ".5em .5em 2em 0  rgba(0, 255, 0, 0.1)" };
    case "Work":
      return { boxShadow: ".5em .5em 2em 0  rgba(0, 0, 255, 0.1)" };
    default:
      return {};
  }
}
function Card({ project, i }) {
  return (
    <div className="project-container" key={"project-container" + i}>
      <img
        className="project-image"
        id={"image" + i}
        src={project.image}
        draggable="false"
        alt=""
        style={typeToStyle(project.type)}
      />
      <div className="project-image-overlay">
        <div className="project-title">{project.title}</div>
        <div className="project-description">{project.description}</div>
        <div style={{ flexGrow: 1, backgroundColor: "transparent" }} />
        <div className="project-link-icon" onClick={() => window.open(project.link, "_blank")}>
          <FaLink />
        </div>
      </div>
    </div>
  );
}

export default Card;
