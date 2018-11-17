import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Quote from '../components/Quote';

const Writing = props => (
  <div className="posts">
    <Quote text="Thoughts and musings. Mainly about software development."/>
    <Query
      query={gql`
        {
          posts{
            id
            title
            url
            date
            tags
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.posts.map(({ id, url, title }) => (
          <div key={id}>
            <a
              className="post-link"
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {title}
            </a>
          </div>
        ));
      }}
    </Query>
  </div>
);

export default Writing;