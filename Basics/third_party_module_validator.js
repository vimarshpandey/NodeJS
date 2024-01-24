const validator = require('validator');

const mail = validator.isEmail('abc@outlook.com');

const url = validator.isURL('www.google.com');

const ccnum = validator.isCreditCard('4556567890123456');

const div = validator.isDivisibleBy('507',3);

const emp = validator.isEmpty('6');

const mphn = validator.isMobilePhone('7897294086');

const num = validator.isNumeric('66546sdf4665');

var bool = validator.isBoolean('false');

console.log(mail);
console.log(url);

console.log(ccnum);
console.log(div)
console.log(emp);
console.log(mphn);
console.log(num);
console.log(bool);