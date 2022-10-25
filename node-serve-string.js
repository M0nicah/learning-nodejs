// Create a Server in node js and Serve a String

const http = require('http');

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(300, {'Content-Type' : 'text/plain'});
    res.write('Hello World, this is my first node server!');
    res.end();

});

server.listen(port, host, (error)=>{
    if (error){
        return console.log('Error occured : ', error);
    }
    console.log('Server listening on ' + host + ':' + port);
})