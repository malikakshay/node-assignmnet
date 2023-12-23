const http = require('http');

const responseText = "I  am happy to learn full stack web development from pw skills."

//create an http server

const server =  http. createServer((req, res) =>{
    //set the content type to plain text

    res.setHeader('Content-Type', 'text/plain');

//send the response text to the client

res.end(responseText);
});

//set the port for the server text to the client
const port = 3002;

//starts the server and listen on the specified port

server.listen(port, () =>{
    console.log(`server is running on http://localhost:${port}/`);
});