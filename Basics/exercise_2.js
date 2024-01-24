const yargs = require('yargs');
const fs = require('fs');

const inpt = yargs.argv;

var data = {
        input1 : inpt._[0],
        input2 : inpt._[1],
        input3 : inpt._[2],
        input4 : inpt._[3],
        input5 : inpt._[4],
    }

var data_entry = JSON.stringify(data);

fs.writeFileSync('exercise_2.json',data_entry);