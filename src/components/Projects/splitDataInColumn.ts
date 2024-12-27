import { InfoProject } from "./ListOfProject";

interface Accumulator {
  column1: InfoProject[];
  column2: InfoProject[];
}

export const splitProjectsInColumns = (
  projects: InfoProject[],
  isWideScreen: boolean
): Accumulator => {
  if (isWideScreen) {
    return projects.reduce<Accumulator>(
      (acc, project, index) => {
        if (index % 2 === 0) {
          acc.column1.push(project);
        } else {
          acc.column2.push(project);
        }

        return acc;
      },
      { column1: [], column2: [] }
    );
  }

  return {
    column1: projects,
    column2: [],
  };
};
