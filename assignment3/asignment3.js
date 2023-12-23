const fs = require('fs');

//path to the file to be read

const filePath = 'nodejs_architecture.txt';

//read the content of the file

fs.readFile(filePath, 'utf8' , (err, data) => {
    if(err){
        console.error('Error reding file:' , err);
    }else{
        //print the content to the console

        console.log('content of nodejs_architecture.txt:\n', data);
    }
});