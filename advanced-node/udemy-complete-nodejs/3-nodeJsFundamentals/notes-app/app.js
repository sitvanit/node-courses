const yargs = require('yargs'); // helps to parse argv

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true, // isRequired, false by default
    alias: 't' // node app add -t "title"
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true, // isRequired, false by default
    alias: 'b' // node app add -t "new title" -b "body"
}

const argv = yargs
    .command('add', 'Add a new note', { title: titleOptions, body: bodyOptions })
    .command('list', 'List all notes')
    .command('read', 'Read a note', { title: titleOptions })
    .command('remove', 'Remove a note', { title: titleOptions })
    .help() // node app --help or for a specific command node app add --help
    .argv;

const command = process.argv[2];
console.log(`Command: ${command}\n`);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    note ? notes.logNote(note) : console.log('Note title taken');
} else if (command === 'list') {
    notes.getAll().forEach(note => notes.logNote(note));
} else if (command === 'read') {
    const readNote = notes.getNote(argv.title);
    readNote ? notes.logNote(readNote) : console.log('Note hasnt been found');
} else if (command === 'remove') {
    const isNoteRemoved = notes.removeNote(argv.title);
    const message = isNoteRemoved ? `Note ${argv.title} has been removed` : `Note ${argv.title} hasn't been found`;
    console.log(message);
} else {
    console.log('Command not recognized')
}

// node app add --title=secret --body="This is my secret"

