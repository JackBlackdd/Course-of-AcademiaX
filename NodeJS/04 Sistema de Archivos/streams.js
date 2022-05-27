const fs = require("fs");
const path = require("path");

// let lorem = path.join(__dirname, '../lorem.txt');
// let nuevo = path.join(__dirname, '../nuevo.txt');
// const streamLeer = fs.createReadStream(lorem, 'utf-8');
// const streamEscribir = fs.createWriteStream(nuevo, 'utf-8');

// streamLeer.on('data', data => {
//     console.log('datos : ', data);
//     streamEscribir.write(data);
// });

process.stdin.on('data', data => {
    console.log('datos : ', data);
    process.stdout.write(data);
});
