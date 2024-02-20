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

    catch (e) {}

    for(let i = 0; i < data.length; i++)
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


var getAns = (name, ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10) => {
    var totalScore = 0;
    var subjectScores = {};
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
        return console.log(chalk.bold.red(" ---- **You have already given the test** ----\n"));
    }

    try
    {
        var dataString = fs.readFileSync('questions.json');
        var data = JSON.parse(dataString);
    }
    
    catch (e) {}

    for (let i = 0; i < data.length; i++)
    {
        const correctAns = data[i].correctAns;
        const selectedAns = eval(`ans${i + 1}`);

        if (correctAns === selectedAns)
        {
            totalScore += 5;

            // Assuming 'subject' is the attribute in questions.json for the subject
            const subject = data[i].subject;

            // Initialize subject score if not already present
            if (!subjectScores[subject])
            {
                subjectScores[subject] = 0;
            }

            // Update subject score
            subjectScores[subject] += 5;
        }

        else
        {
            totalScore -= 1;
        }
    }

    var updatedData = { name: name, totalScore: totalScore, subjectScores: subjectScores };

    fs.writeFileSync('quiz_app_data.json', JSON.stringify([...name_data, updatedData]));

    console.log(chalk.bold.green("\n                                                    ---- **Thanks for giving the test** ----"));
    console.log(chalk.bold.green("\n                                              ---- **For result use getresult command with name** ----"));
    console.log(chalk.bold.green("\n                                         ---- **If want subjectwise marks then use the command with subject** ----\n\n"));
};

var getResult = (name, subject) =>
{
    var name_data = [];

    try
    {
        var dataString = fs.readFileSync('quiz_app_data.json');
        name_data = JSON.parse(dataString);
    }
    
    catch (e) {}

    var personData = name_data.find((data) => data.name === name);

    if(subject)
    {
        if (personData)
        {
            if(subject === "gk")
            {
                console.log(chalk.bold.blue(`                                                    ---- **${name}'s score in General Knowledge is: ${personData.subjectScores.gk} ** ----\n`));
            }
            else if(subject === "programming")
            {
                console.log(chalk.bold.blue(`                                                      ---- **${name}'s score in Programming is: ${personData.subjectScores.programming} ** ----\n`));
            }
            else if(subject === "maths")
            {
                console.log(chalk.bold.blue(`                                                         ---- **${name}'s score in Maths is: ${personData.subjectScores.maths} ** ----\n`));
            }
            else
            {
                console.log(chalk.bold.red("                                                       ---- **Invalid subject name** ----"));
                return;
            }
            console.log(chalk.bold.green("                             ---- **For getting correct answers of the questions use getans command with name** ----\n"));
            console.log(chalk.bold.green("                                 ---- **For the answer of specific question enter question number (optional)** ----\n"));
        }

        else
        {
            console.log(chalk.bold.red(`                                                      ---- **${name} not found in the data** -----\n`));
        }
    }

    else
    {
        if (personData)
        {
            console.log(chalk.bold.blue(`                                                      ---- **${name}'s total score is: ${personData.totalScore} / 50 ** ----\n`));
            console.log(chalk.bold.green("                             ---- **For getting correct answers of the questions use getans command with name** ----\n"));
            console.log(chalk.bold.green("                                 ---- **For the answer of specific question enter question number (optional)** ----\n"));
        }

        else
        {
            console.log(chalk.bold.red(`                                                      ---- **${name} not found in the data** -----\n`));
        }
    }
};

var getAnswer = (name, questionnumber) =>
{
    try
    {
        var dataString = fs.readFileSync('quiz_app_data.json');
        var quiz_data = JSON.parse(dataString);
    }
    
    catch (e)
    {
        console.error("Error reading quiz_app_data.json:", e);
        return;
    }

    var candidateData = quiz_data.find(candidate => candidate.name === name);

    if (!candidateData)
    {
        console.log(chalk.bold.red("                                                          ---- **You have not given the quiz. Cannot display the answers** ----\n"));
        return;
    }

    var question_data;

    try
    {
        var dataString = fs.readFileSync('questions.json');
        question_data = JSON.parse(dataString);
    } 
    
    catch (e)
    {
        console.error("Error reading questions.json:", e);
        return;
    }

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
            console.log("Invalid question number.")
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
        var dataString = fs.readFileSync('quiz_app_data.json');
        var score_data = JSON.parse(dataString);

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
    try
    {
        var dataString = fs.readFileSync('questions.json');
        data = JSON.parse(dataString);
    }

    catch (e){}

        if(data.length >= questionnumber)
        {
            console.log(data[questionnumber - 1].hint);
        }
        else
        {
            console.log('Invalid Question Number'); 
        }

    
    console.log(chalk.bold.green("                                             **---- For giving the answer use giveans command** ----\n"));
    console.log(chalk.bold.green("                                 **---- Before giving the answer enter your name and then give the answers** ----\n\n"));

    
};

module.exports = {welcomeMSG, getQuestion, getAns, getResult, getAnswer, getLeaderboard, getHint};