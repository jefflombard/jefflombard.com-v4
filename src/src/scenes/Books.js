import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Books = props => (
  <Query
    query={gql`
      {
        books{
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.books.map(({ id }) => (
        <div key={id}>
          <p>{`id: ${id}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Books;