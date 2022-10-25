// Create a Server in node js

const http = require('http');

const host = '127.0.0.1'
const port = 3000

// Create a server using the createServer() method. createServer() method takes a callback function as arguments. 

const server = http.createServer((req, res) => {
    res.WriteHead(200, {"Content-Type": "text/plain"});
    console.log("Server Working");
    res.end("Server working success");

});
server.listen(port,host, (error) => {
    if (error) {
        return console.log('An error occured : ', error);
    }
    console.log('server is listening on ' + host + ':' + port);

})
