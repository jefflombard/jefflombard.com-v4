import React from 'react';

import Project from './Project';

const ProjectsList = ({ projects, filter }) => (
  <ul className="project-list">
    { projects
      .filter(project => project.tags.includes(filter) || filter === 'false')
      .map((project) => {
        const { title, id } = project;
        return (<Project key={id} title={title} />);
      })
    }
  </ul>
);

export default ProjectsList;
