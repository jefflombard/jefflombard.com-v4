import React from 'react';

import Post from './Post';

const PostList = ({ posts }) => (
  <ul className="posts">
    {posts.map(({ id, title, url }) => (
      <Post id={id} title={title} url={url} />
    ))}
  </ul>
);

export default PostList;
