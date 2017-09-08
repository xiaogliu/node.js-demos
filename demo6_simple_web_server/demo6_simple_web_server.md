demo6会完成一个完成的web服务器，可以完成表单提交并根据提交的不同内容作出不同的相应。   

### 使用：

```
node server.js
```
然后在浏览器打开`localhost:3001`

退出node：`ctrl + c`

### 涉及知识点：   

- chunk编码（分块传输编码，chunk transfer encoding）:HTTP中的一种数据传输机制，允许服务器发送给客户端的数据可以分成多个部分；
- node会讲主机名后所有的内容都放在url属性中，通过`req.url`可以访问；
- **有个bug：如果表单中提交的内容含有中文，会乱码，如何解决？？？** 可以在头部的`Content-Type`中指明编码，这样浏览器显示没问题，但通过代码检查看到的还是乱码`res.writeHead(200, {'Content-Type': 'text/html', 'charset': 'UTF-8'});`
