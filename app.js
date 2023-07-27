const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { a, b } = req.body;
  const sum = a + b;
  res.json({ sum });
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

module.exports = app; 
