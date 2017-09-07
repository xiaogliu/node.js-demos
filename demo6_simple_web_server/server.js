require('http').createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.writeHead(200); // 不指定content类型，默认是文本类型text/plain
  res.end([
    '<form method="POST" action="/url">',
    '<h1>My form</h1>',
      '<fieldset>',
      '<label>Personal information</label>',
      '<p>What is your name?</p>',
      '<input type="text" name="name">',
      '<p><button>Submit</button></p>',
    '</form>'
  ].join('')); // 用数组形式纯粹为了便于查看
}).listen(3001);
