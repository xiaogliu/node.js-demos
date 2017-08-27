在Node.js中，也可以随时进行事件的监听和分发，这也是构成Node.js虽然是单线程但可以处理高并发的原因所在。   

Node.js暴露了`Event Emitter`API，该API上定义了`on`, `emit`， `removeListener`方法。通过`require('events').EventEmitter`引入。  

demo4中`index.js`代码如下：   

```js
const EventEmitter = require('events').EventEmitter;

let a = new EventEmitter;

// 添加事件
a.on('eventName', function () {
  console.log('a.event called');
});

// 通过emit触发事件
a.emit('eventName');
```
