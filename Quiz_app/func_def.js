const fs = require('fs');

var addName=(name) =>
{
    var name_data= [];
    var data_item_name = {name};

    try
    {
        var dataString = fs.readFileSync('quiz_app_data.json');
        name_data = JSON.parse(dataString); 
    }

    catch (e){}

    var duplicatedata = name_data.filter((data_item_name)=> data_item_name.name === name );

    if(duplicatedata.length === 0 )
    {
        name_data.push (data_item_name);
        fs.writeFileSync('quiz_app_data.json' , JSON.stringify(name_data));
    }

    else 
    {
        console.log("Name is already there.");
    }
};

function welcomeMSG()
{
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n");
    console.log("                                                           **Welcome to Arcade Quiz**\n");
    console.log("               -----------------------------------------------------------------------------------------------------------------               \n\n");
}

function invalidCMD()
{
    console.log("                                                     **Please enter a valid command**");
}

var addSubject=(name, subject, level) =>
{
    var data= [];
    var data_item = {name, subject, level};

    try
    {
        var dataString = fs.readFileSync('quiz_app_data.json');
        data = JSON.parse(dataString); 
    }

    catch (e){}

    data.push (data_item);
    fs.writeFileSync('quiz_app_data.json' , JSON.stringify(data));
};

module.exports = {addName, welcomeMSG, invalidCMD, addSubject};