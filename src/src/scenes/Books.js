import React from 'react';
import { Query } from "react-apollo";
import { Markup } from 'interweave';
import gql from "graphql-tag";

const Books = props => (
    <div className="books">
        <p>Reading is a huge part of my life.</p>
        <p>I try to read a book a week.</p>
        <p>Here's what's on my shelf:</p>
        <Query
            query={gql`
              {
                books{
                  id
                  content
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :</p>;
              console.log('Hey, if you\'re reading this... validateDOMNesting() Error is Caused by the markup coming from the Good Reads API. Not my code :)');
              return data.books.map(({ content, id }) => (<div key={id}><Markup content={content} /></div>));
            }}
        </Query>
    </div>
);

export default Books;
