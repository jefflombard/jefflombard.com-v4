import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Quote from '../components/Quote';
import _ from 'lodash';

const Projects = props => (
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
        if (loading) return <p>Reticulating splines...</p>;
        if (error) return <p>Error :(</p>;

        const allTags = _.flatten(data.projects.map( project => project.tags));
        const allTagsSorted = allTags.sort();
        const uniqueTags = _.uniq(allTagsSorted);

        

        return <div></div>;
      }}
    </Query>
  </div>
);

export default Projects;