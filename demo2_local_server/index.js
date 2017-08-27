const http = require('http'); // http是node自带模块，无需安装

const serv = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World!</h1>');
});

serv.listen(3000);
