import React from 'react';
import { Query } from "react-apollo";
import { Markup } from 'interweave';
import gql from "graphql-tag";

const Books = props => (
  <Query
    query={gql`
      {
        books{
          id
          content
          date
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.books.map(({ id,content,date }) => (
        <div key={id}>
          <Markup content={content} />
          <p>{`id: ${id}, ${date}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Books;