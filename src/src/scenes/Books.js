import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Quote from '../components/Quote';
import Loading from '../components/Loading';
import BookList from '../components/BookList';

const Books = () => (
  <div className="books">
    <Quote text="I love to read." />

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
        if (loading) return <Loading />;
        if (error) return <p>Error: Tell Jeff to fix his database connection.</p>;
        console.log('Hey, if you\'re reading this... validateDOMNesting() Error is Caused by the markup coming in from the Good Reads API. Not my code :)');
        return <BookList books={data.books} />;
      }}
    </Query>
  </div>
);

export default Books;
