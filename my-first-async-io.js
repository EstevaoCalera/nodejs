const fs = require('fs');

const path = process.argv[2];
buf = fs.readFile(path, 'utf-8', callback);

function callback (err, data) {
    if (!err){
        const lines = data.split("\n");
        console.log(lines.length - 1);
    } else {throw err}
}