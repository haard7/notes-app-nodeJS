const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
// const getnotes = require('./notes.js');
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a note!!',
    builder: {
        title: {
            describe: 'Title of this note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of this note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }

})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of this note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        notes.listNotes();
        // console.log('listing out all note');
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of this note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        notes.readNotes(argv.title);
    }
})

yargs.parse();
// console.log(yargs.argv);


// const fs = require('fs');
// // fs.writeFileSync('notes.txt', 'Hello! I am Haard Patel dreating file through Node!!');
// // fs.appendFileSync('notes.txt', 'Hey  this is in addition in later: ');
// const name = require('./utils.js');
// console.log(name);
// const add = require('./utils.js');
// const sum = add(1,3);
// console.log(sum);