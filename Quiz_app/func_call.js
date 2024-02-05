const fs = require('fs');
const yargs = require('yargs');
const data = require('./func_def.js');

const argv = yargs.argv;
var command = argv._[0];

if(command === 'start')
{
    data.welcomeMSG();
}

else if (command === 'entername')
{
    data.addName(argv.name);
}

else if(command === 'entersubandlevel')
{
    data.addSubject(argv.name, argv.subject, argv.level);
}

else
{
    data.invalidCMD();
}