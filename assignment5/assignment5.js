const fs = require('fs');

//path to the file to be deleted

const filePath = 'nodejs_architecture.txt';

//delete the file

fs.unlink(filePath, (err) =>{
    if(err){
        console.error('Error deleting file:', err);
    }else{
        console.log('file deleted sucessfully.');
    }
});