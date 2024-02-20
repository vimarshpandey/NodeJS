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
        },
        subject:
        {
            describe:'Your subject name',
            demandOption: false,
            type: 'string'
        }
    },

    handler:
    function(argv)
    {
        data.getResult(argv.name, argv.subject);
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
        questionnumber:
        {
            describe:'Answer of the question',
            demandOption: false,
            type: 'number'
        }
    },

    handler:
    function(argv)
    {
        data.getAnswer(argv.name, argv.questionnumber);
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
            demandOption: false,
            type: 'number'
        }
    },

    handler:
    function(argv)
    {
        data.getLeaderboard(argv.num);
    }
})

yargs.command({
    command: 'gethint',
    describe: 'Gives the hint for a perticular question',
    builder:
    {
        questionnumber:
        {
            describe:'Id of the question',
            demandOption: true,
            type: 'number'
        }
    },

    handler:
    function(argv)
    {
        data.getHint(argv.questionnumber);
    }
})

yargs.command({
    command: 'addquestion',
    describe: 'For adding a question',
    builder:
    {
        question:
        {
            describe:'Question for adding',
            demandOption: true,
            type: 'string'
        },
        option1:
        {
            describe:'Option 1 for question',
            demandOption: true,
            type: 'string'
        },
        option2:
        {
            describe:'Option 2 for question',
            demandOption: true,
            type: 'string'
        },
        option3:
        {
            describe:'Option 3 for question',
            demandOption: true,
            type: 'string'
        },
        option4:
        {
            describe:'Option 4 for question',
            demandOption: true,
            type: 'string'
        },
        correctAns:
        {
            describe:'Correct answer for the question',
            demandOption: true,
            type: 'number'
        },
        subject:
        {
            describe:'Subject of the question',
            demandOption: true,
            type: 'string'
        },
        hint:
        {
            describe:'Hint for the question',
            demandOption: true,
            type: 'string'
        }
    },

    handler:
    function(argv)
    {
        data.getAnswer(argv.question, argv.option1, argv.option2, argv.option3, argv.option4, argv.correctAns, argv.subject, argv.hint);
    }
})

yargs.parse();