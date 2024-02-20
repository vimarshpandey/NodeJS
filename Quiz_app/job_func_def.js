const fs = require('fs');
const chalk = require('chalk');
const _ = require('lodash');

function welcomeMSG()
{
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.yellow("                                                           **Welcome to Job Search**\n"));
    console.log(chalk.bold.yellow("               -----------------------------------------------------------------------------------------------------------------               \n"));
    console.log(chalk.bold.green("                   **---- For searching the job enter your name and type of job you are searching for with searchjob command** ----\n\n"));
}

var getJob = (jobtype, salaryrangefrom, salaryrangeto) =>
{
    try
    {
        var dataString = fs.readFileSync('job_data.json');
        data = JSON.parse(dataString);
    } catch (e)
    {
        console.error('Error reading or parsing JSON file');
        return;
    }

    for (let i = 0; i < data.length; i++)
    {
        if (data[i].jobtype === jobtype && data[i].salary >= salaryrangefrom && data[i].salary <= salaryrangeto)
        {
            console.log(data[i].jobtype);
            console.log(data[i].designation);
            console.log(data[i].companyname);
            console.log(`Salary: ${data[i].salary}`);
            console.log('----------------------');
        }
    }
};

var getDescription = (companyname) =>
{
    try
    {
        var dataString = fs.readFileSync('job_data.json');
        data = JSON.parse(dataString);
    } catch (e)
    {
        console.error('Error reading or parsing JSON file');
        return;
    }

    for (let i = 0; i < data.length; i++)
    {
        if (data[i].companyname === companyname)
        {
            console.log(data[i].companydescription);
        }
    }
};

var getEmployment = (name) => {
    try {
        var dataString = fs.readFileSync('persondata.json');
        var data = JSON.parse(dataString);
    } catch (e)
    {
        console.error('Error reading or parsing persondata.json file');
        return;
    }

    try {
        var dataString1 = fs.readFileSync('job_data.json');
        var jobdata = JSON.parse(dataString1);
    } catch (e)
    {
        console.error('Error reading or parsing job_data.json file');
        return;
    }

    for (let i = 0; i < data.length; i++)
    {
        if (data[i].name === name)
        {
            const personSkills = data[i].skills;

            for (let j = 0; j < jobdata.length; j++)
            {
                const requiredSkills = jobdata[j].skillsrequired;

                if(personSkills == requiredSkills)
                {
                    console.log(`Matching job found for ${name}:`);
                    console.log(`Job Type: ${jobdata[j].jobtype}`);
                    console.log(`Designation: ${jobdata[j].designation}`);
                    console.log(`Company Name: ${jobdata[j].companyname}`);
                    console.log('----------------------');
                }
            }
        }
    }
};



module.exports = {welcomeMSG, getJob, getDescription, getEmployment}