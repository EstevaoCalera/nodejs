const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], listCallback);

function listCallback(err, list) {
    if (err) {
        throw err;
    } else {
        for (let i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === "."+ process.argv[3].toString()) {
                console.log(list[i]);
            }
        }
    }
}

