const http = require('http')
const url = require('url')

const server = http.createServer((request, response)=>{
    if(request.method === 'GET'){
        response.write('hello how are you?');
        let data = url.parse(request.url, true).query
        response.write('Hello '+ data.name + '! Today\'s temprature is '+data.temp)
        
    //******* response.end() is very important if you skip this the server will keep on loading********//
        response.end(); 
    }
    else if(request.method === 'POST'){
        response.write('Recieved your request')
        let finalData='';
        request.on('data', (body)=>{
            console.log(body.toString('utf-8'));
            finalData = body.toString('utf-8')
            
        })
        request.on('end',()=>{
            console.log('This is a POST request and today\'s temprature is reported by ' +finalData.name + '\n and Today\'s temprature is '+ finalData.temprature)
        })
        response.end();
    }
})

server.listen(9000,()=>{
    console.log('the server is running')
})