import React from 'react';

import Post from './Post';

const PostList = ({ posts }) => (
  <ul className="posts">
    {posts.map(({
      id,
      title,
      url,
      description,
    }) => (
      <Post key={id} title={title} url={url} description={description} />
    ))}
  </ul>
);

export default PostList;
