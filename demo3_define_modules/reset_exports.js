let Person = function (name) {
  this.name = name;
};

Person.prototype.sayName = function () {
  console.log('resetExports name: ' + this.name);
}

module.exports = Person; // 导出定义好的对象
