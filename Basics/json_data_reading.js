const fs = require('fs');

var str = fs.readFileSync('json_data_entry.json');

var obj = JSON.parse(str);

console.log(typeof obj);

console.log(obj);

console.log(obj.name, obj.Gender, obj.Age)