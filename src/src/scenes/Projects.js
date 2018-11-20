import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import Quote from '../components/Quote';
import Loading from '../components/Loading';
import ProjectTagsFilter from '../components/ProjectTagsFilter';

class Projects extends Component {
  tagHandler(tag) {
    this.state = { test: 'test' };
    console.log(tag);
  }

  render() {
    this.tagHandler = this.tagHandler.bind(this);

    return (
      <div className="projects">
        <Quote text="Things I've been working on." />
        <Query
          query={gql`
            {
              projects{
                tags
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>Error :(</p>;

            const allTags = _.flatMapDeep(data.projects, project => _.get(project, 'tags'));
            const allTagsSorted = allTags.sort();
            const uniqueTags = _.uniq(allTagsSorted);

            return <ProjectTagsFilter tags={uniqueTags} tagHandler={this.tagHandler} />;
          }}
        </Query>
      </div>
    );
  }
}

export default Projects;
