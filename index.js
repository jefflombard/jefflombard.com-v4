const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/index.js');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(JSON.stringify({ Hello: 'World' }));
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'dev' || false,
}));

app.listen(port, () => {
  if (process.env.NODE_ENV === 'dev') {
    console.log(`JeffLombard.com listening at http://localhost:${port}!`);
  } else {
    console.log('JeffLombard.com listening.');
  }
});
