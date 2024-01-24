const lodash = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

var command = argv._[0];
console.log(argv);

var arr =  ['A','B','C','D','A','E','F','G','H','B','E']
var arr1 = [1, 2, 3, 4, 5];

console.log("Command: ", command);

if(command === "unique")
{
    console.log(lodash.uniq(arr));
}

else if(command === "reverse")
{
    console.log(lodash.reverse(arr));
}

else if(command === "slice")
{
    console.log(lodash.slice(0, 2));
}

else if(command === "cancat")
{
    console.log(lodash.concat(arr, arr1));
}

else if(command === "floor")
{
    console.log(lodash.floor(4.006));
}

else
{
    data.invalidData();
}