const http = require('http')

const server = http.createServer((request, response)=>{
    if(request.method === 'GET'){
        response.write('hello how are you?');
        response.write(request.url)
        
    //******* response.end() is very important if you skip this the server will keep on loading********//
        response.end(); 
    }
    else if(request.method === 'POST'){
        response.write('Recieved your request')
        response.end();
    }
})

server.listen(9000,()=>{
    console.log('the server is running')
})