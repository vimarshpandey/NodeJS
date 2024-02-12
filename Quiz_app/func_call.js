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
            type: 'string'
        },
        ans1:
        {
            describe:'Your ans for first question',
            demandOption: true,
            type: 'number'
        },
        ans2:
        {
            describe:'Your ans for second question',
            demandOption: true,
            type: 'number'
        },
        ans3:
        {
            describe:'Your ans for third question',
            demandOption: true,
            type: 'number'
        },
        ans4:
        {
            describe:'Your ans for fourth question',
            demandOption: true,
            type: 'number'
        },
        ans5:
        {
            describe:'Your ans for fifth question',
            demandOption: true,
            type: 'number'
        },
        ans6:
        {
            describe:'Your ans for sixth question',
            demandOption: true,
            type: 'number'
        },
        ans7:
        {
            describe:'Your ans for seventh question',
            demandOption: true,
            type: 'number'
        },
        ans8:
        {
            describe:'Your ans for eigth question',
            demandOption: true,
            type: 'number'
        },
        ans9:
        {
            describe:'Your ans for ninth question',
            demandOption: true,
            type: 'number'
        },
        ans10:
        {
            describe:'Your ans for tenth question',
            demandOption: true,
            type: 'number'
        }
    },

    handler:
    function(argv)
    {
        data.getAns(argv.name, argv.ans1, argv.ans2, argv.ans3, argv.ans4, argv.ans5, argv.ans6, argv.ans7, argv.ans8, argv.ans9, argv.ans10);
    }
})

yargs.command({
    command: 'getresult',
    describe: 'Gives the result',
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
        data.getResult(argv.name);
    }
})

yargs.command({
    command: 'getans',
    describe: 'Gives the answer of the question',
    builder:
    {
        name:
        {
            describe:'Your name',
            demandOption: true,
            type: 'string'
        },
        question:
        {
            describe:'Answer of the question',
            demandOption: false,
            type: 'number'
        }
    },

    handler:
    function(argv)
    {
        data.getAnswer(argv.name, argv.question);
    }
})

yargs.command({
    command: 'getleaderboard',
    describe: 'Gives the result',
    builder:
    {
        num:
        {
            describe:'Number of top persons you want to see',
            demandOption: true,
            type: 'number'
        }
    },

    handler:
    function(argv)
    {
        data.getLeaderboard(argv.num);
    }
})

yargs.parse();