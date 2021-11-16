const fs = require('fs-extra');

fs.readFile('color.bmp', (err, data) => {
    console.log([...data])
})
