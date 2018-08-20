import React from 'react';

const ProjectTagsFilter = ({ tag, title, onClick }) => (
  <li className="project-tag">
    <button type="button" data-tag={tag} onClick={onClick}>{title || tag}</button>
  </li>
);

export default ProjectTagsFilter;
