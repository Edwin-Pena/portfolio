import ProjectsJson from "../../data/Projects.json";
import "./Projects.css";
import ListOfProjects from "./ListOfProject";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <ListOfProjects projects={ProjectsJson} />
    </section>
  );
};

export default Projects;
