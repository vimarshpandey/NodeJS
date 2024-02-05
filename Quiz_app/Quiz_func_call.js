const yargs = require('yargs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const data = require('./Quiz_func_def.js');

const argv = yargs.argv;
var command = argv._[0];

if(command === "start")
{
    const rl = readline.createInterface({ input, output });

    data.welcomeMSG();

    rl.question('                                                        ---- Please Enter your name ----\n', (candidateName) => {
        if (candidateName.trim() === 'stop')
        {
          data.stopQuiz();
          rl.close();
        }
        else
        {
          data.startQuiz(candidateName);
          data.chooseSubject(rl);
        }
    });
}

else
{
    console.log("\n\n             ---- If you want to start or stop the Arcade Quiz App the please give the user input as start or stop respectively ----\n\n")
    data.invalidCMD();
}