const fs = require('fs');

//information about Node.js architecture
const nodejsArchitectureInfo = `
Node.js Architecture:

Node.js uses a single-threaded, event-driven model that allows developers to build scalable network applications.
The key components of Node.js architecture include:

1. Event Loop: Handles asynchronous operations and allows non-blocking I/O operations.
2. V8 JavaScript Engine: Executes JavaScript code and compiles it into machine code.
3. Libuv: Provides the event loop implementation and abstracts I/O operations for multiple platforms.
4. C++ Binding: Allows Node.js to interact with low-level operating system functionalities.

Node.js is well-suited for building real-time applications and APIs due to its non-blocking nature.`;

//path to new file

const filePath ='nodejs_architecture.txt';

//write the information to the new file 

fs.writeFile(filePath, nodejsArchitectureInfo, (err) => {
    if(err){
        console.log('Error writing to file:', err);
    }else{
        console.log(`Informtion about Node.js architecture has been written to ${filePath} `);
    }
});