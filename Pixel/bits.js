const fs = require('fs');
const { readBitmapFile } = require('bitmap-js');

const bitmapFile = m.readBitmapFile("color-2.bmp");
console.log(bitmapFile)

// fs.readFile('color.bmp', (err, data) => {
//     console.log([...data])
// })

// fs.open('color.bmp', 'r', function (status, fd) {
//     if (status) {
//         console.log(status.message);
//         return;
//     }
//     let buffer = Buffer.alloc(100);
//     fs.read(fd, buffer, 0, 100, 0, function (err, num) {
//         console.log(buffer.toString('utf8', 0, num));
//     });
// });

//process.chdir(__dirname)

let stream = new Buffer.from(fs.readFileSync('color-2.bmp', 'utf-8'))
console.log(stream)
console.log(stream.toJSON())

let bm = stream.toString('utf-8', 0, 1)
let bm2 = stream.toString('hex', 0)
let bm3 = stream.toString('hex', 1)
let width = stream.toString('hex', 18, 19, 20, 21)
let height = stream.toString('hex', 22, 23, 24, 25)
let blue = stream.toString('hex', 62, 63)
let green = stream.toString('hex', 64, 65)
let red = stream.toString('hex', 66, 67)

console.log('bm', bm)
//console.log('bm2', bm2)
// console.log('height', height)
// console.log('width', width)
// console.log('veamos', red, green, blue)