在demo1中介绍了模块的相对路径和绝对路径，在demo3中，将自定义一个模块，并通过相对路径的形式引入。   

如果要引用自定义模块，让模块暴露一个API作为`require`的返回值，需要使用`module`和`exports`这两个全局变量。   

默认情况下每个模块都会暴露一个空对象，这个空对象指向`exports`(是`module.exports`的引用)，所以只需要往`exports`添加属性或方法即可，就像`origin_exports.js`展示的那样:

```js
// origin_exports
module.exports = {
  name: 'xiaoming',
  sayName: function () {
    console.log('originExports name: ' + this.name);
  },
};
```

如果是复杂的模块，直接在`exports`上添加属性可能无法满足需求，这时可以自定义一个对象，然后导出该对象（实际是对`exports`对象的重写），就像`reset_exports.js`中展示的那样：

```js
// reset_exports
let Person = function (name) {
  this.name = name;
};

Person.prototype.sayName = function () {
  console.log('resetExports name: ' + this.name);
}

module.exports = Person; // 导出定义好的对象
```

将`module.exports = definedObj`放在最后可以保证万无一失，有些书中将该语句放在文件第一行，此时如果自定义对象不是通过函数定义的，也就没有函数提升，将会报错（本例如果将导出语句放在第一行就会报错）。

> 目前Node.js还不支持ES6的模块系统（2017-8-27）。
