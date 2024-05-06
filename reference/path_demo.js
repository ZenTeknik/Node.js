const path=require('path');

// basename
console.log(path.basename(__filename));

// directory name 
console.log(path.dirname(__dirname));


// file extension  like c++,c, or js etc
console.log(path.extname(__filename));


// create path object 
console.log(path.parse(__filename).base);

// concatenate path
console.log(path.join(__dirname,'teste','hello.html'));


console.log(__filename,__dirname);