import React from 'react';

import BrandedAnchor from './BrandedAnchor';

const Post = ({
  id,
  title,
  url,
  description,
}) => (
  <li className="post" key={id}>
    <p>{title}</p>
    <p>{description}</p>
    <BrandedAnchor href={url}>View Post</BrandedAnchor>
  </li>
);

export default Post;
