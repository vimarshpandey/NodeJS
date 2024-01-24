var somevar=process.argv[2];
const fs = require('fs');

var inp = {
        inp1 : process.argv[2],
        inp2 : process.argv[3],
        inp3 : process.argv[4],
        inp4 : process.argv[5],
        inp5 : process.argv[6],
    }

var input = JSON.stringify(inp);

fs.writeFileSync('exercise_1.json',input);