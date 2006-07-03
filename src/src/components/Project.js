import React from 'react';

const Project = ({
  title,
  description,
  url,
  gitUrl,
}) => (
  <li className="project">
    <p className="project-title">{title}</p>
    <p className="small thin">{description}</p>
    <p>{url}</p>
    <p>{gitUrl}</p>
  </li>
);

export default Project;
