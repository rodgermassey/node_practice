const http = require('http');
const url = require('url')

const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'})
    // response.write('Hello'+request.url+'I\'m from server!');
    const queryData = url.parse(request.url, true).query;
    const message = 'Hello '+queryData.name+'! Today\'s temprature is '+queryData.temp
    response.write(message)
    response.end();
})

server.listen(9000, (error)=>{
    if(error){
        console.log("an error has occured")
    }
    console.log('The server is up and running')
})