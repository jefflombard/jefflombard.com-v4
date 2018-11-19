import React from "react";

const Post = ({ id, title, url }) => (
  <li className="post" key={id}>
    <a
      className="post-link"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      {title}
    </a>
  </li>
);

export default Post;