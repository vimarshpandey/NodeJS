const fs = require('fs');
const yargs = require('yargs');
const data = require('./job_func_def.js');

yargs.command({
    command: 'start',
    describe: 'Start Job searching app',
    builder:
    {},

    handler:
    function()
    {
        data.welcomeMSG();
    }
})

yargs.command({
    command: 'searchjob',
    describe: 'Start searching for job',
    builder:
    {
        jobtype:
        {
            describe:'Job related to which sector',
            demandOption: true,
            type: 'string'
        },
        salaryrangefrom:
        {
            describe:'Lower limit of salary',
            demandOption: true,
            type: 'number'
        },
        salaryrangeto:
        {
            describe:'Upper limit of salary',
            demandOption: true,
            type: 'number'
        }
    },

    handler:
    function(argv)
    {
        data.getJob(argv.jobtype, argv.salaryrangefrom, argv.salaryrangeto);
    }
})

yargs.command({
    command: 'companyinfo',
    describe: 'Information of the company',
    builder:
    {
        companyname:
        {
            describe:'Name of the company',
            demandOption: true,
            type: 'string'
        }
    },

    handler:
    function(argv)
    {
        data.getDescription(argv.companyname);
    }
})

yargs.command({
    command: 'getjobs',
    describe: 'Search on basis of skills',
    builder:
    {
        name:
        {
            describe:'Your name',
            demandOption: true,
            type: 'string'
        }
    },

    handler:
    function(argv)
    {
        data.getEmployment(argv.name);
    }
})

yargs.parse();