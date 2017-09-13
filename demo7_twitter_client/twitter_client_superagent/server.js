const request = require('superagent');

request.get('https://api.douban.com/v2/book/search')
  .send({ q: '计算机 ' })
  .end(function (res) {
    console.log(res.body);
  });
