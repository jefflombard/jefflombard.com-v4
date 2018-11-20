import React from 'react';

import Book from './Book';

const BooksList = ({ books }) => (
  <a
    className="books-link"
    href="https://www.goodreads.com/user/show/57558558-jeff"
    rel="noopener noreferrer"
    target="_blank"
  >
    <ul className="books-container">
      {books.map(({ id, content }) => (
        <Book id={id} content={content} />
      ))}
    </ul>
  </a>
);

export default BooksList;
