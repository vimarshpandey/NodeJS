const yargs = require('yargs');
const data = require('./Quiz_func_def.js');

const argv = yargs.argv;

var command = argv._[0];

console.log("Command: ", command);

if(command === "start")
{
    data.startQuiz();

    const argv = yargs.argv;

    var command1 = argv._[0];

    if(command1 === "GK")
    {
        data.gkQuiz();
    }

    else if(command1 === "maths")
    {
        data.mathsQuiz();
    }

    else if(command1 === "analytics")
    {
        data.geoQuiz();
    }

    else if(command1 === "java")
    {
        data.javaQuiz();
    }

    else if(command1 === "sql")
    {
        data.sqlQuiz();
    }

    else if(command1 === "english")
    {
        data.Quiz();
    }

    else
    {
        data.invalidCMD();
    }
}

else if(command === "stop")
{
    data.stopQuiz();
}

else
{
    data.invalidCMD();
}