const fs = require('fs');
const chalk = require('chalk');
const _ = require('lodash');

function welcomeMSG()
{
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.yellow("                                                           **Welcome to Arcade Quiz**\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.green("                                             **---- For giving the quiz use givequiz command** ----\n\n"));
}

var getQuestion=() =>
{
    try
    {
        var dataString = fs.readFileSync('questions.json');
        data = JSON.parse(dataString);
    }

    catch (e){}

    for(let i = 0; i < 10; i++)
    {
        console.log(data[i].question);
        for(let j = 0; j < 4; j++)
        {
            console.log(data[i].options[j]);
        }
    }

    console.log(chalk.bold.green("                                             **---- For giving the answer use giveans command** ----\n"));
    console.log(chalk.bold.green("                                 **---- Before giving the answer enter your name and then give the answers** ----\n\n"));
};


var getAns = (name, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10) =>
{
    var score = 0;
    var name_data = [];

    try
    {
        var dataString = fs.readFileSync('quiz_app_data.json');
        name_data = JSON.parse(dataString);
    }

    catch (e) {}

    var duplicateData = name_data.find((data) => data.name === name);

    if (duplicateData)
    {
        return console.log(chalk.bold.red("                                                             ---- **Name is already there** ----\n"));
    }

    try
    {
        var dataString = fs.readFileSync('questions.json');
        var data = JSON.parse(dataString);
    }

    catch (e) {}

    //console.log(data[i].correctAns);
    if (data[0].correctAns == ans1)
    {score = score + 5;}else{score = score - 1;}
    if (data[1].correctAns == ans2)
    {score = score + 5;}else{score = score - 1;}
    if (data[2].correctAns == ans3)
    {score = score + 5;}else{score = score - 1;}
    if (data[3].correctAns == ans4)
    {score = score + 5;}else{score = score - 1;}
    if (data[4].correctAns == ans5)
    {score = score + 5;}else{score = score - 1;}
    if (data[5].correctAns == ans6)
    {score = score + 5;}else{score = score - 1;}
    if (data[6].correctAns == ans7)
    {score = score + 5;}else{score = score - 1;}
    if (data[7].correctAns == ans8)
    {score = score + 5;}else{score = score - 1;}
    if (data[8].correctAns == ans9)
    {score = score + 5;}else{score = score - 1;}
    if (data[9].correctAns == ans10)
    {score = score + 5;}else{score = score - 1;}


    var updatedData = {name: name, score: score};

    fs.writeFileSync('quiz_app_data.json', JSON.stringify([...name_data, updatedData]));

    console.log(chalk.bold.green("\n                                                       ---- **Thanks for giving the test** ----\n"));
    console.log(chalk.bold.green("\n                                               ---- **For result use getresult command with name** ----\n"));

};

var getResult = (name) =>
{
    var name_data = [];

    try
    {
        var dataString = fs.readFileSync('quiz_app_data.json');
        name_data = JSON.parse(dataString);
    }
    
    catch (e) {}

    var personData = name_data.find((data) => data.name === name);

    if (personData)
    {
        console.log(chalk.bold.blue(`                                                         ---- **${name}'s score is: ${personData.score}  ** ----\n`));
        console.log(chalk.bold.green("                                   ---- **For getting correct answers of the questions use getans command** ----\n"));
        console.log(chalk.bold.green("                                 ---- **For the answer of specific question enter question number (optional)** ----\n"));
    }

    else
    {
        console.log(chalk.bold.red(`                                                      ---- **${name} not found in the data** -----\n`));
    }
};

var getAnswer=(question) =>
{
    try
    {
        var dataString = fs.readFileSync('questions.json');
        question_data = JSON.parse(dataString);
    }

    catch (e) {}

    if(question)
    {
        console.log(question_data[question - 1].question);
        var ca = question_data[question - 1].correctAns;
        console.log(chalk.bold.green(question_data[question - 1].options[ca - 1]));
    }
    else
    {
        for(let i =0; i<question_data.length; i++)
        {
            console.log(question_data[i].question);
            var ca = question_data[i].correctAns;
            console.log(chalk.bold.green(question_data[i].options[ca - 1]));
        }
    }

    console.log(chalk.bold.green("\n\n                                        ---- **For leaderboard use getleaderboard command with the number of toppers you want to see** ----\n"))
};

var getLeaderboard = (num) =>
{
    try
    {
        var dataString = fs.readFileSync('quiz_app_data.json');
        var score_data = JSON.parse(dataString);

        score_data = _.sortBy(score_data, 'score').reverse();

        console.log(`\n                                                       Top ${num} persons on the leaderboard:\n`);

        for (let i = 0; i < num; i++)
        {
            console.log(chalk.bold.red(`                                                             ${i + 1}. ${score_data[i].name} - Score: ${score_data[i].score}`));
        }
    }

    catch (e)
    {
        console.error("Error reading the data file.");
    }
};

module.exports = {welcomeMSG, getQuestion, getAns, getResult, getAnswer, getLeaderboard};