const models = require('./models');
const mongoose = require('mongoose');
const path = require('path');
const schema = require('./schema/index.js');
const cors = require('cors');

// Setup Database
const mongodb = process.env.MONGODB_URI;
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Setup The rest of Express
const express = require('express');
const graphqlHTTP = require('express-graphql');
const port = process.env.PORT || 3000;
const app = express();

// Expose public folder
app.use(express.static(__dirname + '/public'));

// Serve GraphQL
app.use('/graphql', cors(), graphqlHTTP({
  schema,
  graphiql: (
    // Auto turn on graphiql when in dev environments.
    process.env.NODE_ENV === 'dev'
    // Allow turning in if GRAPHIQL ENV is set to 'TRUE'
    || process.env.GRAPHIQL === 'TRUE'
  ),
}));

// Serve React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(port, () => {
  if (process.env.NODE_ENV === 'dev') {
    console.log(`JeffLombard.com listening at http://localhost:${port}!`);
  } else {
    console.log(`JeffLombard.com listening on port: ${port}.`);
  }
});
