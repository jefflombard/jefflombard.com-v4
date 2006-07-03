import React from 'react';

const Post = ({
  id,
  title,
  url,
  description,
}) => (
  <li className="post" key={id}>
    <a
      className="post-link"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <p>{title}</p>
      <p>{description}</p>
    </a>
  </li>
);

export default Post;
