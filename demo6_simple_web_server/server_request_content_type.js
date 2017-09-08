require('http').createServer(function (req, res) {
  if (req.url === '/') {
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
  } else if(req.url === '/url' && req.method === 'POST') {
    let body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(`<p>request Content-Type: ${req.headers['Content-Type']}</p>
               <p>Data: ${body}</p>`)
    });
  }
}).listen(3001);
