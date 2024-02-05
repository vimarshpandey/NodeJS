-->  Title :- Quiz App

-->  Attribute :-

    1. subject
    2. difficulty
    3. result
    4. yourName
    5. fileName
    6. suggession
    7. leaderboard

-->  Functions :-

        1. start_Quiz()
        2. stop_Quiz()
        3. choose_Difficulty()
        4. choose_subject()
        5. submit_quiz()
        **--6. get_Hint()--**
        7. show_Leaderboard()
        8. invalid_CMD()

-->  Function arguments :-

        1. start_Quiz_App()
            a. yourName

        2. stop_Quiz_App()
            a. No argument

        3. choose_Difficulty()
            a. difficulty (easy, average, hard)

        4. submit_quiz()
            a. result
            b. fileName
            c. suggession

        5. invalid_CMD()
            a. No argument

        **--6. get_Hint()
            a. subject
            b. difficulty (easy, average, hard)--**
        
        7. choose_subject()
            a. subject
        
        8. show_Leaderboard()
            a. leaderboard





            if(command1 === "GK")
    {
        data.gkQuiz();
    }

    else if(command1 === "maths")
    {
        data.mathsQuiz();
    }

    else if(command1 === "java")
    {
        data.javaQuiz();
    }

    else if(command1 === "sql")
    {
        data.sqlQuiz();
    }

    else
    {
        data.invalidCMD();
    }



    const yargs = require('yargs');
const data = require('./Quiz_func_def.js');

console.log("\n\n             ---- If you want to start or stop the Arcade Quiz App the please give the user input as start or stop respectively ----\n\n")
data.invalidCMD();

// Create a command using yargs
yargs.command({
  command: 'start',
  describe: 'Start the program Arcade Quiz Application',
  handler: () => {
    // Run a loop until the user enters a candidate name
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log("               -----------------------------------------------------------------------------------------------------------------               \n");
    console.log("                                                           **Welcome to Arcade Quiz**\n");
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n\n");

    function runProgram()
    {
        readline.question('> Enter candidate name: ', (candidateName) => {
        if (candidateName.toLowerCase() === 'exit')
        {
          data.stopQuiz();
          readline.close();
        }
        else if (candidateName.trim() === '')
        {
          console.log('Please enter a valid candidate name.');
          runProgram();
        }
        else
        {
          data.startQuiz();
          readline.close();
        }
      });
    }

    runProgram(); // Start the program
  }
});

// Parse the command-line arguments
yargs.parse();
