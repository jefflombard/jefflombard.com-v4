import React from 'react';
import { Query } from "react-apollo";
import { Markup } from 'interweave';
import gql from "graphql-tag";

import Quote from '../components/Quote';

const Books = props => (
    <div className="books">
        <Quote text="I love to read. Feel free to send me some recommendations."/>
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
    </div>
);

export default Books;
