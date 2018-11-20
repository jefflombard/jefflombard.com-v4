import React from 'react';

import { Markup } from 'interweave';

const Book = ({ id, content }) => (
  <div key={id} className="book"><Markup content={content} /></div>
);

export default Book;
