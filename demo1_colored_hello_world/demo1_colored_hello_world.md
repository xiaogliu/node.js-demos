在终端输入下面命令，会看到彩色输出的`Hello World!`:   

```bash
$ node index
```

`index.js`是入口文件，通过`node`命令访问时可以省略'.js'的扩展名。   

`index.js`完整内容如下：   

```js
require('colors');

console.log('Hello World!'.rainbow);
```

通过`require`关键字，就可以把模块引入改文件，接下来就可以使用它的各种功能。   

引入模块时有相对路径和绝对路径的区别，绝对路径在这里指的是**安装在`node_modules`中的模块，或者Node.js自带的模块，比如`fs`**，通过绝对路径引用模块只需要输入模块名就好；相对路径指的是相对于当前文件的路径名，比如`../some_module_name`。
