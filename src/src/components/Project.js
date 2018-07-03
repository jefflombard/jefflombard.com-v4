import React from 'react';

const Project = ({
  title,
  description,
  url,
  gitUrl,
  tags,
}) => (
  <li className="project">
    <p className="project-title">{title}</p>
    <p className="project-description small thin">{description}</p>
    <p className="project-tags small thin">
      <span className="project-tag">tags:</span>
      {tags.map(tag => <span className="project-tag">{tag}</span>)}
    </p>
    <div className="project-link-holder">
      { url && <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">View Project</a>}
      { gitUrl && <a className="project-link" href={gitUrl} target="_blank" rel="noopener noreferrer">View Source Code</a>}
    </div>
  </li>
);

export default Project;
