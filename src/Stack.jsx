import ProjectData from "./ProjectData";
import "./stack.css";
import StackCard from "./StackCard";

function Stack() {
  return (
    <div className="stack" id="stack">
      {ProjectData.map((projects, i) => (
        // Each object at this level is a list of projects with a common type and a bookend
        <>
          <div className="stack-bookend" key={"stack-bookend" + i}>
            {projects.type}
          </div>
          {projects["content"].map((project, j) => (
            // Each object at this level is a project
            <StackCard project={project} i={100 * i + j} />
          ))}
        </>
      ))}
    </div>
  );
}

export default Stack;
