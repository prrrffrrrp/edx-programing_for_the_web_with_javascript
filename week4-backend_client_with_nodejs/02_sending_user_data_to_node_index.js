let express = require('express');
let app = express();

let nameFinder = (req, res, next) => {
  let name = req.query.name;
  if (name) {
    req.username = name.toUpperCase();
  }
  else {
    req.username = 'Ghest';
  }
  next();
};

let greeter = (req, res, next) => {
  res.status(200).type('html');
  res.write('Hello, ' + req.username);
  next();
};

let adminName = (req, res, next) => {
  req.username = 'Admin';
  next();
};

let logger = (req, res, next) => {
  let url = req.url;
  let time = new Date();
  console.log('Served request for ' + url + ' at' + time);
  next();
};

let header = (req, res, next) => {
  // header
  next();
};

let footer = (req, res, next) => {
  // footer
  next();
};


let commonRoute = express.Router();
commonRoute.use(header, greeter, footer);

app.use('/welcome', logger, nameFinder, commonRoute, (req, res) => { res.end(); });

app.use('/admin', logger, adminName, commonRoute, (req, res) => { res.end(); });


// SENDING USER DATA TO NODE

// 1 - via Query

app.use('/viaQuery', (req, res) => {
  res.status(200).type('html');
  let query = req.query;
  console.log(query);

  let name = query.name;
  let location = query.location;
  let length = Object.keys(query).length;

  res.send("Hello " + name + ' from ' + location);
});

// 2 - via Param

app.use('/name/:userName/location/:userLocation', (req, res) => {
  let params = req.params;
  console.log(params);

  let name = params.userName;
  let location = params.userLocation;
  let length = Object.keys(params).length
  console.log(length)

  res.send('Hello ' + name + ' from ' + location)
});

// 3 - via Post method


app.use('/public', express.static('public'));

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/handleForm', (req, res) => {
  let name = req.body.username;
  let animals = req.body.animal;
  console.log(req.body)
  res.send('Hi ' + name + ' really? ' + animals + '?')
})
//
// Leave route this at the end
app.use('/', logger, (req, res) => { res.send('hi'); });

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
