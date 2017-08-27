const originExports = require('./origin_exports');
const resetExportsPerson = require('./reset_exports');

let person = new resetExportsPerson();
person.name = 'xiaohong';

originExports.sayName();
person.sayName();
