const fs = require('fs');
const yargs = require('yargs');
const lodash = require('lodash');
const data = require('./defineing_function_file.js');

const argv = yargs.argv;

var command = argv._[0];

console.log("Command: ", command);

if(command === "add")
{
    data.addData();
}

else if(command === "deleat")
{
    data.deleatData();
}

else
{
    data.invalidData();
}