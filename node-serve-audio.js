//Create a Server in node js and serve Audio/mp3
const http = require("http");
const fs = require('fs');

http.createServer( (req, res) => {
    console.log('server is running');
    res.writeHead(200, {'Content-Type': 'audio/mp3'});
    fs.exists('audio/mp3', (exists) =>{
        if(exists){
            const rstream = fs.createReadStream('audion/mp3');
            rstream.pipe(res);
            
        }
        
        else
		{
			res.end("Its a 404");
		}
    
    })
}).listen(3000)