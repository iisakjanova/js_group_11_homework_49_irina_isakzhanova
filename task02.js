const figlet = require('figlet');

figlet(process.argv[2], (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    console.log(data);
});