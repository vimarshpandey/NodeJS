const fs = require('fs');
const chalk = require('chalk');

// var addNameScore=(name) =>
// {
//     var name_data= [];
//     var data_item_name = {name};

//     try
//     {
//         var dataString = fs.readFileSync('quiz_app_data.json');
//         name_data = JSON.parse(dataString); 
//     }

//     catch (e){}

//     var duplicatedata = name_data.filter((data_item_name)=> data_item_name.name === name );

//     if(duplicatedata.length === 0 )
//     {
//         name_data.push (data_item_name);
//         fs.writeFileSync('quiz_app_data.json' , JSON.stringify(name_data));
//     }

//     else 
//     {
//         console.log("Name is already there.");
//     }
// };

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

    for(i = 0; i < 3; i++)
    {
        console.log(data[i].question);
        for(j = 0; j < 4; j++)
        {
            console.log(data[i].options[j]);
        }
    }

    console.log(chalk.bold.green("                                             **---- For giving the answer use giveans command** ----\n"));
    console.log(chalk.bold.green("                                 **---- Before giving the answer enter your name and then give the answers** ----\n\n"));
};


var getAns = (name, ans1, ans2, ans3) =>
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

    for (let i = 0; i < 3; i++)
    {
        //console.log(data[i].correctAns);
        if (data[i].correctAns == ans1 || data[i].correctAns == ans2 || data[i].correctAns == ans3)
        {
            //console.log("Correct answer");
            score = score + 1;
        }
        else
        {
            //console.log("Wrong answer");
        }
    }

    var updatedData = {name: name, score: score};

    fs.writeFileSync('quiz_app_data.json', JSON.stringify([...name_data, updatedData]));

    console.log(chalk.bold.green("\n                                                                      ---- **Thanks for giving the test** ----\n"));
    console.log(chalk.bold.green("\n                                                                     ---- **For result use result command** ----\n"));

};

module.exports = {welcomeMSG, getQuestion, getAns};