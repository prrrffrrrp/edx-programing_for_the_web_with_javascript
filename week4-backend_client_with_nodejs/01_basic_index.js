var express = require('express');
var app = express();

app.use('/', (req, res) => {
  //res.send('Hello World');

  var name = req.query.name;
  res.status(200).type('html');
  if (name) {
    res.write('Hi, ' + name + ", it's nice to see you.");
  }
  else {
    res.write('Welcome, ghest!');
  }
  res.end();
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
