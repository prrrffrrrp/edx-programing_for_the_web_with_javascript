let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));


let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/handleForm', (req, res) => {
  let name = req.body.username;
  let animals = [].concat(req.body.animal);
  console.log(animals);
  res.render('showAnimals', { name: name, animals: animals });
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
})
