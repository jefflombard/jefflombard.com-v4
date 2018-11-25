import React from 'react';
import { Row, Col, Hidden } from 'react-grid-system';

import ProjectTag from './ProjectTag';

const ProjectTagsFilter = ({ tags, onClick }) => (
  <Hidden xs sm>
    <Row className="project-tags-filter-container">
      <Col sm={2}>
        <p className="filter-text">filter by skill</p>
      </Col>
      <Col sm={10}>
        <ul className="project-tags-filter">
          { tags.map(tag => <ProjectTag key={tag} tag={tag} onClick={onClick} />)}
          <ProjectTag key="clear" tag={false} title="clear all" onClick={onClick} />
        </ul>
      </Col>
    </Row>
  </Hidden>
);

export default ProjectTagsFilter;
