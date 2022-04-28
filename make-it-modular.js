const mymodule = require('./mymodule.js') 

list = mymodule(process.argv[2],process.argv[3], printCallback);

function printCallback(err, data) {
    if (err) {throw err
    } else{
        data.forEach(element => {
            console.log(element);
            console.log(data[element]);
        });
    }
}