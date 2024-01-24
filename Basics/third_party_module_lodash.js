const _ = require('lodash');        // third party module (lodash)

console.log(_.isString("true"));

var result = _.uniq(['A','B','C','D','A','E','F','G','H','B','E']);

var result1 = _.dropRight(["Vimarsh", "Anand", "Kiran", "Yogesh"]);

var result2 = _.difference([2, 1], [2, 3]);

var result3 = _.indexOf([1, 2, 1, 2], 2);

var result4 = _.max([4, 2, 8, 6]);

var result5 = _.capitalize('FRED');

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);