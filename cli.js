const readline = require('readline');

const { getResults } = require('./index.js');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

rl.prompt();

rl.on('line', (line) => {

    if (line.trim().toLowerCase() === 'q') {
        rl.close()
    }

    const result = getResults(line)
    console.log(result)

    rl.prompt();
});

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
});

rl.on('close', () => {
    console.log('RPN Calculator closed.');
    process.exit(0);
});