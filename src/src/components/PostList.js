import React from 'react';

import Post from './Post';

const PostList = (props) => (
  <ul class="posts">
    {props.posts.map(({ id, title, url }) => (
      <Post id={id} title={title} url={url} />
    ))}
  </ul>
);

export default PostList;