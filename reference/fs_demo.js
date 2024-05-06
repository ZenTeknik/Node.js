const fs = require('fs');
const path = require('path');

// Create folder

/*fs.mkdir(path.join(__dirname, './test'), {}, (err) => {
    if (err) throw err;
    console.log("Folder created");
});


// Write file 
fs.writeFile
(path.join(__dirname, './test', 'hello.txt'), 'hello world', (err) => {
    if (err) throw err;
    console.log("File written");
});


// append th file
fs.appendFile
(path.join(__dirname, './test', 'hello.txt'), '   I love nodjs', (err) => {
    if (err) throw err;
    console.log("File append");
});



*/

// read the file
fs.readFile(path.join(__dirname, './test','hello.txt'), 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
});

