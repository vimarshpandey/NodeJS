const fs = require('fs');

var person = {
    name: "Vimarsh",
    Gender: "Male",
    Age: 22
}

var p1 = JSON.stringify(person);

fs.writeFileSync('json_data_entry.json',p1);