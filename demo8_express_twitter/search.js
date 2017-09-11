const request = require('superagent');

module.exports = function search (query, fn) {
  request.get('https://api.douban.com/v2/book/search')
    .data({q: query})
    .end(function (res) {
      if (res.body && Array.isArray(res.body.results)) {
        return fn(null, res.body.results);
      }
      fn(new Error('Bad twitter response'));
    });
};
