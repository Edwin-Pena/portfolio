import "./Projects.css";
import { splitProjectsInColumns } from "./splitDataInColumn";
import errorgif from "/images/this-is-fine-404.gif";
import { useEffect, useState } from "react";

export interface InfoProject {
  id: string;
  title: string;
  date: string;
  description: string;
  img: string;
  demo: string;
}

interface Props {
  projects: InfoProject[];
}

const ListOfProjects: React.FC<Props> = ({ projects }) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1090);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1090);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!projects || projects.length === 0) {
    return (
      <div className="error-container">
        <p className="loading-error">There are no projects available</p>
        <img src={errorgif} alt="Error message with a gif" />
      </div>
    );
  }

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(`1 ${a.date}`);
    const dateB = new Date(`1 ${b.date}`);
    return dateB.getTime() - dateA.getTime();
  });

  const columns = splitProjectsInColumns(sortedProjects, isWideScreen);

  return (
    <div className="projects-container">
      <div className="column">
        {columns.column1.map((project) => (
          <a
            href={project.demo}
            target="_blank"
            className="card-project-container"
            key={project.id}
          >
            <img
              src={project.img}
              className="project-img img-column-one"
              alt={project.title}
            />
            <div className="project-desc ">
              <div className="text-project">
                {project.title}
                <span className="desc-text">{project.description}</span>
              </div>
              <div className="text-project">{project.date}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="column">
        {columns.column2.map((project) => (
          <a
            href={project.demo}
            target="_blank"
            className="card-project-container"
            key={project.id}
          >
            <img
              src={project.img}
              className="project-img img-column-two"
              alt={project.title}
            />
            <div className="project-desc">
              <div className="text-project">
                {project.title}
                <span className="desc-text">{project.description}</span>
              </div>
              <div className="text-project">{project.date}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListOfProjects;
