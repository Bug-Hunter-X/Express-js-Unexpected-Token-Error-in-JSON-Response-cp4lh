const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Unexpected token error in JSON response
//This happens when the response is not valid JSON. This can happen if you try to send a non-JSON object such as a string, number, or array to the client.

app.get('/error', (req, res) => {
  res.send( {message: 'This is not valid JSON'} ); //Error
});