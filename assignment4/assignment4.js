const fs = require('fs');

//path to the file to be read and appended

const filePath = 'nodejs_architecture.txt'

const advantagesOfNodejs = `
Advantages of Node.js:

1. Non-blocking I/O: Node.js is designed to handle asynchronous operations efficiently, making it suitable for building scalable applications with high concurrency.

2. Fast Execution: Node.js uses the V8 JavaScript engine, which compiles JavaScript code into machine code, resulting in fast execution.

3. Single Programming Language: Node.js allows developers to use JavaScript for both client-side and server-side development, providing consistency in the programming language.

4. Large Ecosystem: Node Package Manager (NPM) provides a vast repository of modules and packages, enabling developers to easily integrate third-party libraries into their projects.

5. Community Support: Node.js has a large and active community that contributes to its growth, provides support, and shares best practices.

`;

//append the advantages  to the existing file

fs.appendFile(filePath, advantagesOfNodejs, (err) =>{
    if(err){
        console.error('Error appending to file:',err);
    }else{
        console.log('Advanteges of node.js have been  appended to the file.');
    

//read the updated content and print it to the console

fs.readFile(filePath, 'utf8', (readErr, data) =>{
    if(readErr){
        console.error('Error reading file:', readErr);
    }else{
        console.log('Updated content of nodejs_architecture.txt:\n', data);
    }
  });
    };
 }) ;

