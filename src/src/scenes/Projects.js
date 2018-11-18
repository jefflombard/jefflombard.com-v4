import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Quote from '../components/Quote';

const Projects = props => (
  <div className="projects">
    <Quote text="These are some of my more fun projects." />
    <Query
      query={gql`
        {
          projects{
            id
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.projects.map(({ id }) => (
          <div key={id}>
            <p>{`id: ${id}`}</p>
          </div>
        ));
      }}
    </Query>
  </div>
);

export default Projects;