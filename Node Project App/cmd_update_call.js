const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./cmd_update_def.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:
    {
        title:
        {
            describe:'Note title',
            demandOption: true,
            typr: 'string'
        },

        body:
        {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },

    handler:
    function(argv)
    {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
        getNotes.addNotes(argv.title, argv.body);
    }
})

yargs.parse();