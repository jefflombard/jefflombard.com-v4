import React from 'react';
import { Query } from "react-apollo";
import { Markup } from 'interweave';
import gql from "graphql-tag";

import Quote from '../components/Quote';

const Books = props => (
  <div className="books">
      <Quote text="I love to read."/>
      <a
        className="books-link"
        href="https://www.goodreads.com/user/show/57558558-jeff"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="books-container">
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
                console.log('Hey, if you\'re reading this... validateDOMNesting() Error is Caused by the markup coming in from the Good Reads API. Not my code :)');
                return data.books.map(({ content, id }) => (<div key={id} className="book"><Markup content={content} /></div>));
              }}
          </Query>
        </div>
      </a>
  </div>
);

export default Books;
