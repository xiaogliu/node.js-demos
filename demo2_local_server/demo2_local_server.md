通过Node.js自带模块`http`可以用非常简单的代码搭建本地服务器，执行

```bash
node index
```

然后在浏览器输入`localhost:3000`便可看到`Hello World!`输出。

`index.js`文件全部内容如下

```js
var http = require('http'); // http是node自带模块，无需安装

var serv = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World!</h1>');
});

serv.listen(3000);
```

> 这里只是简单的实现了本地服务器功能，其他诸如自动打开浏览器页面、命令行中进程提示、错误捕获在下面的教程汇总逐步添加。
