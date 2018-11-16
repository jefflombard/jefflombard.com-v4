import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Writing = props => (
  <Query
    query={gql`
      {
        posts{
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.posts.map(({ id }) => (
        <div key={id}>
          <p>{`id: ${id}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Writing;