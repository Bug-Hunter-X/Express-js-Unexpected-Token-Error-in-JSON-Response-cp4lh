const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Solution: Use res.json() to send valid JSON
app.get('/data', (req, res) => {
  const data = { message: 'This is valid JSON' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});