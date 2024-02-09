const fs = require('fs');
const yargs = require('yargs');
const data = require('./func_def.js');

yargs.command({
    command: 'start',
    describe: 'Start the quiz app',
    builder:
    {},

    handler:
    function()
    {
        data.welcomeMSG();
    }
})

yargs.command({
    command: 'entername',
    describe: 'Save your name',
    builder:
    {
        name:
        {
            describe:'Your name',
            demandOption: true,
            typr: 'string'
        }
    },

    handler:
    function(argv)
    {
        data.addNameScore(argv.name, argv.score);
    }
})

yargs.command({
    command: 'givequiz',
    describe: 'Gets the question from json file',
    builder:
    {},

    handler:
    function()
    {
        data.getQuestion();
    }
})

yargs.command({
    command: 'giveans',
    describe: 'Gets the ans form the user',
    builder:
    {
        name:
        {
            describe:'Takes your name',
            demandOption: true,
            typr: 'string'
        },
        ans1:
        {
            describe:'Your ans for first question',
            demandOption: true,
            typr: 'number'
        },
        ans2:
        {
            describe:'Your ans for second question',
            demandOption: true,
            typr: 'number'
        },
        ans3:
        {
            describe:'Your ans for third question',
            demandOption: true,
            typr: 'number'
        },
    },

    handler:
    function(argv)
    {
        data.getAns(argv.name, argv.ans1, argv.ans2, argv.ans3);
    }
})

yargs.command({
    command: 'getresult',
    describe: 'Give the result',
    builder:
    {},

    handler:
    function()
    {
        data.getQuestion();
    }
})

yargs.parse();