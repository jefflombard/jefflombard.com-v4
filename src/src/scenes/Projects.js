import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

import Quote from '../components/Quote';
import Loading from '../components/Loading';
import ProjectTagsFilter from '../components/ProjectTagsFilter';
import ProjectsList from '../components/ProjectsList';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.tagHandler = this.tagHandler.bind(this);
    this.state = {
      filter: 'false',
    };
  }

  tagHandler(e) {
    e.preventDefault();
    e.target.blur();
    const tag = e.target.dataset.tag; // eslint-disable-line
    this.setState({
      filter: tag,
    });
  }

  render() {
    const { filter } = this.state;
    return (
      <div className="projects">
        <Quote text="Things I've been working on." />
        <Query
          query={gql`
            {
              projects{
                id
                title
                description
                tags
                url
                gitUrl
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error: Tell Jeff to fix his database connection.</p>;

            const allTags = _.flatMapDeep(data.projects, project => _.get(project, 'tags'));
            const allTagsSorted = allTags.sort();
            const uniqueTags = _.uniq(allTagsSorted);

            return (
              <div>
                <ProjectTagsFilter tags={uniqueTags} onClick={this.tagHandler} />
                <ProjectsList projects={data.projects} filter={filter} />
              </div>);
          }}
        </Query>
      </div>
    );
  }
}

export default Projects;
