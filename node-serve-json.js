// Create a Server in node js and serve JSON

const http = require ('http')
const fs = require ('fs')
console.log('Server will listen at :  127.0.0.1:3000 ');
http.createServer( (req, res) => {
    //change the MIME type to 'application/json'
    res.writeHead(200, {'Content-Type': 'application/json'});
    // create json
    let json_response = {
        status : 200,
        message : 'successfull',
        result : ['sunday', 'october', 'monday', 'november', 'Tuesday'],
        code : 2000    
    }
    console.log('server is running');
    res.end(JSON.stringify(json_response))
}).listen(3000);