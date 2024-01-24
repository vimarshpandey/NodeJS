const yargs = require('yargs');

const inpt = yargs.argv;

console.log("The user input: ",inpt);

console.log("The user input: ",inpt._[0]);

console.log("The user input: ",inpt._[1]);