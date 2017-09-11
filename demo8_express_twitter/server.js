// dependence
const express = require('express');
// const search = require('./views/search');

// creat app
const app = express();

// configure
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', {layout: false});

// router
app.get('/', function (req, res) {
  res.render('index');
});

// listen

app.listen(3001);
