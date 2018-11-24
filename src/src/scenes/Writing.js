import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Quote from '../components/Quote';
import Loading from '../components/Loading';
import PostList from '../components/PostList';

const Writing = () => (
  <div className="posts">
    <Quote text="Things I've been writing about." />
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
        if (loading) return <Loading />;
        if (error) return <p>Error: Tell Jeff to fix his database connection.</p>;
        return <PostList posts={data.posts} />;
      }}
    </Query>
  </div>
);

export default Writing;
