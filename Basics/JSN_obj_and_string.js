var obj = {
    name: "Vimarsh"
}

console.log(typeof obj);        // type is object

console.log(obj);

var stringObj = JSON.stringify(obj);        // changing from object to string

console.log(typeof stringObj);      // type is string

console.log(stringObj);


var person = '{"name": "Vimarsh", "Gender": "Male", "Age": 22}';

console.log(typeof person);     // type is string

console.log(person);

var objPerson = JSON.parse(person);     // changing from string to object

console.log(typeof objPerson);      //type is object

console.log(objPerson);