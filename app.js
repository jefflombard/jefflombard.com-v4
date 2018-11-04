const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(JSON.stringify({ Hello: 'World' }));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}!`);
});
