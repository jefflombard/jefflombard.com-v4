import React from 'react';

import Project from './Project';

const ProjectsList = ({ projects, filter }) => (
  <ul className="project-list">
    { projects
      .filter(project => project.tags.includes(filter) || filter === 'false')
      .map((project) => {
        const {
          title,
          id,
          description,
          url,
          gitUrl,
        } = project;
        return (
          <Project
            key={id}
            title={title}
            description={description}
            url={url}
            gitUrl={gitUrl}
          />
        );
      })
    }
  </ul>
);

export default ProjectsList;
