import React from 'react';

const ProjectTagsFilter = (props) => (
  // map props.tags to a bunch of tag elements. Pass the handler to them


(<div className="filter">filter by tag | {uniqueTags.map( tag => (<a className="tag" key={tag} href="#">{tag}</a>))}</div>
);

export default ProjectTagsFilter;