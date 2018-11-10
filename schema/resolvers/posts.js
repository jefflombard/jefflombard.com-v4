const Parser = require('rss-parser');

const parser = new Parser();

const postsResolver = (async () => {
  const feed = await parser.parseURL('https://medium.com/feed/@JeffLombardJr');
  const items = feed.items.map(item => (
    {
      id: item.guid,
      title: item.title,
      url: item.link,
      date: item.isoDate,
      tags: item.categories,
    }
  ));

  return items;
});

module.exports = postsResolver;
