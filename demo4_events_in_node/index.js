const EventEmitter = require('events').EventEmitter;

let a = new EventEmitter;

a.on('eventName', function () {
  console.log('a.event called');
});

// 通过emit触发事件
a.emit('eventName');
