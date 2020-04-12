const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  console.log('Received a request.');
  res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});