import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import Quote from '../components/Quote';
import Loading from '../components/Loading';
// import Filter from '../components/Filter';

const Projects = props => (
  <div className="projects">
    <Quote text="Things I've been working on." />
    <Loading />
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
        if (loading) return <p>Reticulating splines...</p>;
        if (error) return <p>Error :(</p>;

        const allTags = _.flatMapDeep(data.projects, project => _.get(project,'tags'));
        const allTagsSorted = allTags.sort();
        const uniqueTags = _.uniq(allTagsSorted);

        return <div></div>;
        // return <Filter tags={uniqueTags}/>;
      }}
    </Query>
  </div>
);

export default Projects;