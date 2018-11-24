import React from 'react';

import BrandedAnchor from './BrandedAnchor';

const Project = ({
  title,
  description,
  url,
  gitUrl,
  tags,
}) => (
  <li className="project">
    <p className="project-title">{title}</p>
    <p className="project-description thin">{description}</p>
    <p className="project-tags thin">
      <span className="project-tag-inline">tags:</span>
      {tags.map(tag => <span className="project-tag-inline">{tag}</span>)}
    </p>
    <div className="project-link-holder">
      { url && <BrandedAnchor href={url}>View</BrandedAnchor>}
      { gitUrl && <BrandedAnchor href={gitUrl}>View Source</BrandedAnchor>}
    </div>
  </li>
);

export default Project;
