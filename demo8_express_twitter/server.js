// dependence
const express = require('express');
const search = require('./search');

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

app.get('/search', function (req, res, next) {
  search(req.query.q, function (err, tweets) {
    if (err) return next(err);
    res.render('search', {results: tweets, search: req.query.q});
  });
});

// listen

app.listen(3001);
