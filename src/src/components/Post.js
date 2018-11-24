import React from 'react';

import BrandedAnchor from './BrandedAnchor';

const Post = ({
  id,
  title,
  url,
}) => (
  <li className="post" key={id}>
    <p className="post-title">{title}</p>
    <BrandedAnchor href={url}>Read Post</BrandedAnchor>
  </li>
);

export default Post;
