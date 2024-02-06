const fs= require('fs');
const _= require('lodash');
const yargs = require('yargs');
const data = require('./cmd_def.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('command:' , command);
console.log('yargs', argv);

if (command === 'add')
{
    data.addData(argv.regn, argv.rno);
}

else
{
    console.log('command not recognized');
}