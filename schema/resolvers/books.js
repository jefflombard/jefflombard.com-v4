const Parser = require('rss-parser');

const parser = new Parser();

const postsResolver = (async () => {
  const feed = await parser.parseURL(`https://www.goodreads.com/user/updates_rss/57558558?key=${process.env.GOODREADS_KEY}`);
  const items = feed.items.map(item => (
    {
      id: item.guid,
      title: item.title,
      content: item.content,
      date: item.isoDate,
    }
  ));

  return items;
});

postsResolver().then(feed => console.log(feed));
