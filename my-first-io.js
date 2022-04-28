const fs = require('fs');

const path = process.argv[2];
buf = fs.readFileSync(path, 'utf8');
const lines = buf.split("\n");
console.log(lines.length - 1);