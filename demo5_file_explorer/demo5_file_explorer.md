demo5通过Node提供的内置模块`fs`实现对本地文件的读取，通过这个demo可以了解Node的stdio(standard input and output)。   

`fs`是`process`对象的一部分，并且是Node中唯一一个同时提供同步和异步API的模块。   

- 获取文件列表，需要`fs.readdir`方法，使用方法如下：   

```js
fs.readdir('_dirname', function (err, files) {
  console.log(files)
});
```

其中，`err`是错误对象，如果没有错误则为`null`，`files`是所在目下下文件组成的数组。
