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
          tags,
        } = project;
        return (
          <Project
            key={id}
            title={title}
            description={description}
            url={url}
            gitUrl={gitUrl}
            tags={tags}
          />
        );
      })
    }
  </ul>
);

export default ProjectsList;
