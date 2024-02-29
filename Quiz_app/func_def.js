const fs = require('fs');
const chalk = require('chalk');
const _ = require('lodash');

const loadDataQuestion = () =>
{
    try
    {
        const dataString = fs.readFileSync('questions.json');
        return JSON.parse(dataString);
    }
    catch (error) 
    {
        console.error('Error reading questions.json');
        return [];
    }
};

const loadDataQuizAppData = () =>
{
    try
    {
        const dataString = fs.readFileSync('quiz_app_data.json');
        return JSON.parse(dataString);
    }
    catch (error)
    {
        console.error('Error reading quiz_app_data.json');
        return [];
    }
};

function welcomeMSG()
{
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.yellow("                                                           **Welcome to Arcade Quiz**\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.yellow("                                                  **Instruction for adding and removing question**\n"));
    console.log(chalk.bold.yellow("                           **After adding or removing the questions please check that the number of questions should be 10**\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.green("                                             **---- For giving the quiz use givequiz command** ----\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.green("                                             **---- For giving the answer use giveans command** ----\n"));
    console.log(chalk.bold.green("                                           **---- For hint use gethint command with the question number** ----\n"));
    console.log(chalk.bold.green("                                 **---- Before giving the answer enter your name and then give the answers** ----\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.green("                                              ---- **For result use getresult command with name** ----\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.green("                                  ---- **For getting correct answers of the questions use getans command with name** ----\n"));
    console.log(chalk.bold.green("                                     ---- **For the answer of specific question enter question number (optional)** ----\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.green("                        ---- **For leaderboard use getleaderboard command with the number of toppers you want to see (optional)** ----\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
}

var getQuestion=() =>
{
    var data = loadDataQuestion();

    for(let i = 0; i < data.length; i++)
    {
        console.log(data[i].question);
        for(let j = 0; j < 4; j++)
        {
            console.log(data[i].options[j]);
        }
    }

    console.log(chalk.bold.green("                                             **---- For giving the answer use giveans command** ----\n"));
    console.log(chalk.bold.green("                                           **---- For hint use gethint command with the question number** ----\n"));
    console.log(chalk.bold.green("                                 **---- Before giving the answer enter your name and then give the answers** ----\n\n"));
};

var addQuestion = (question, option1, option2, option3, option4, correctAns, hint) =>
{
    try
    {
        var data = loadDataQuestion();
    }
    catch (e)
    {
        // If file doesn't exist or has invalid JSON, initialize with an empty array
        var data = [];
    }

    var newQuestion = {
        question: question,
        options: [option1, option2, option3, option4],
        correctAns: correctAns,
        hint: hint
    };

    data.push(newQuestion);

    // Write the updated data back to 'questions.json'
    fs.writeFileSync('questions.json', JSON.stringify(data));
    console.log(chalk.bold.green("                                                   **---- Question added successfully** ----\n\n"));
};

const removeQuestion = (questionToRemove) =>
{
    try
    {
        const data = loadDataQuestion();

        // Remove the question with the specified text
        const updatedData = data.filter(question => question.question !== questionToRemove);

        // Write the updated data back to 'questions.json'
        fs.writeFileSync('questions.json', JSON.stringify(updatedData));
        console.log(chalk.bold.green("                                                   **---- Question removed successfully** ----\n\n"));
    }
    catch (error)
    {
        console.error('Error removing question');
    }
};


var giveAns = (name, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10) =>
{
    var totalScore = 0;

    var name_data = loadDataQuizAppData();

    var duplicateData = name_data.find((data) => data.name === name);

    if (duplicateData)
    {
        return console.log(chalk.bold.red("\n                                                    ---- **You have already given the test** ----"));
    }

    var data = loadDataQuestion();

    for (let i = 0; i < data.length; i++)
    {
        const correctAns = data[i].correctAns;
        const selectedAns = eval(`ans${i + 1}`);

        if (correctAns === selectedAns)
        {
            totalScore += 5;
        }

        else
        {
            totalScore -= 1;
        }
    }

    var updatedData = { name: name, totalScore: totalScore };

    fs.writeFileSync('quiz_app_data.json', JSON.stringify([...name_data, updatedData]));

    console.log(chalk.bold.green("\n                                                    ---- **Thanks for giving the test** ----"));
    console.log(chalk.bold.green("\n                                              ---- **For result use getresult command with name** ----"));
};

var getResult = (name) =>
{
    var name_data = loadDataQuizAppData();

    var personData = name_data.find((data) => data.name === name);

    if (personData)
    {
        console.log(chalk.bold.blue(`                                                      ---- **${name}'s total score is: ${personData.totalScore}** ----\n`));
        console.log(chalk.bold.green("                             ---- **For getting correct answers of the questions use getans command with name** ----\n"));
        console.log(chalk.bold.green("                                 ---- **For the answer of specific question enter question number (optional)** ----\n"));
    }

    else
    {
        console.log(chalk.bold.red(`                                                      ---- **${name} not found in the data** -----\n`));
    }
};

var getAnswer = (name, questionnumber) =>
{
    var quiz_data = loadDataQuizAppData();
    var question_data = loadDataQuestion();

    var candidateData = quiz_data.find(candidate => candidate.name === name);

    if (!candidateData)
    {
        console.log(chalk.bold.red("                                                          ---- **You have not given the quiz. Cannot display the answers** ----\n"));
        return;
    }

    var question_data;

    if (questionnumber)
    {
        if(question_data.length >= questionnumber)
        {
            console.log(question_data[questionnumber - 1].question);
            var ca = question_data[questionnumber - 1].correctAns;
            console.log(chalk.bold.green(question_data[questionnumber - 1].options[ca - 1]));
        }

        else
        {
            console.log(chalk.bold.red("                                                                  ---- **Invalid Question Number** ----\n"));
        }
    }

    else
    {
        for (let i = 0; i < question_data.length; i++)
        {
            console.log(question_data[i].question);
            var ca = question_data[i].correctAns;
            console.log(chalk.bold.green(question_data[i].options[ca - 1]));
        }
    }

    console.log(chalk.bold.green("\n\n                               ---- **For leaderboard use getleaderboard command with the number of toppers you want to see (optional)** ----\n"));
};

var getLeaderboard = (num) =>
{
    try
    {
        var score_data = loadDataQuizAppData();

        score_data = _.sortBy(score_data, 'totalScore').reverse();

        if(num)
        {
            console.log(`\n                                                       Top ${num} persons on the leaderboard:\n`);

            for (let i = 0; i < num; i++)
            {
                console.log(chalk.bold.red(`                                                             ${i + 1}. ${score_data[i].name} - Score: ${score_data[i].totalScore}`));
            }
        }

        else
        {
            console.log(`\n                                                       All persons on the leaderboard:\n`);

            for (let i = 0; i < score_data.length; i++)
            {
                console.log(chalk.bold.red(`                                                             ${i + 1}. ${score_data[i].name} - Score: ${score_data[i].totalScore}`));
            }
        }
    }

    catch (e)
    {
        console.error("Error reading the data file.");
    }
};

var getHint=(questionnumber) =>
{
    var data = loadDataQuestion();

    if(data.length >= questionnumber)
    {
        console.log(chalk.bold.blue(data[questionnumber - 1].hint));
    }
    else
    {
        console.log(chalk.bold.red('Invalid Question Number')); 
    }

    
    console.log(chalk.bold.green("                                             **---- For giving the answer use giveans command** ----\n"));
    console.log(chalk.bold.green("                                 **---- Before giving the answer enter your name and then give the answers** ----\n\n"));

    
};

// var abc=() =>
// {
//     try
//     {
//         var score_data = loadDataQuizAppData();

//         for(let i = 0; i < score_data.length; i++)
//         {
//             if(score_data[i].totalScore == 50)
//             {
//                 console.log(`Name - ${score_data[i].name} Score - ${score_data[i].totalScore}`);
//             }
//         }
//     }

//     catch (e)
//     {
//         console.error("Error reading the data file.");
//     }
// };

module.exports = {welcomeMSG, getQuestion, giveAns, getResult, getAnswer, getLeaderboard, getHint, addQuestion, removeQuestion};