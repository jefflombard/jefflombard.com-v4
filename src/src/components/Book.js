import React from 'react';
import { Markup } from 'interweave';

const daysAgo = (dateString) => {
  const dateRead = new Date(dateString);
  const now = new Date();
  const elapsedSeconds = now.getTime() - dateRead.getTime();
  const fractionalDay = elapsedSeconds / (1000 * 60 * 60 * 24);
  return Math.ceil(fractionalDay);
};

const Book = ({ id, content, date }) => (
  <div key={id} className="book">
    <Markup content={content} />
    <p>{`${daysAgo(date)} ${daysAgo(date) === 1 ? 'day' : 'days'} ago.`}</p>
  </div>
);

export default Book;
