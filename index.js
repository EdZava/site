var express = require('express');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var config = require('./config');

var app = express();

app.set('port', config.PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('hbs', expressHbs({ extname: 'hbs', defaultLayout: 'default' }));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('home');
});

app.listen(app.get('port'), function(err) {
  console.log("Express running at http://localhost:" + app.get('port'));
});
