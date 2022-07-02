const http = require('http');
const { json } = require('stream/consumers');
const url = require('url')

const server = http.createServer((request, response)=>{
    if(request.method === 'GET'){
        response.write('hello how are you?');
        let data = url.parse(request.url, true).query
        let finalData='yolo'
        request.on('data', (body)=>{
           console.log('first',new Date().getTime())
           finalData = body.toString();
        })
        request.on('end',()=>{
            console.log('second',new Date().getTime())
            console.log('im running')
            response.write(JSON.stringify(finalData)) // Response.write() can't do anything after the response.end() has run.
            response.end(finalData); // That is why we haven't put it outside the request.on('end',()=>{}) as it will before the response.write().
            
            //******* response.end() is very important if you skip this the server will keep on loading********//
            // response.end(JSON.stringify(finalData)); 
        })
        console.log('third',new Date().getTime())
    }
    else if(request.method === 'POST'){
        response.write('Recieved your request')
        let finalData='';
        request.on('data', (body)=>{
            console.log(body.toString('utf-8'));
            finalData += body.toString();
            
        })
        request.on('end',()=>{
            // console.log(typeof JSON.parse(finalData))
            console.log('This is a POST request and today\'s temprature is reported by ' +JSON.parse(finalData).name + '\n and Today\'s temprature is '+ JSON.parse(finalData).temprature)
            response.end(finalData);
        })
        
    }
})

server.listen(9000,()=>{
    console.log('the server is running')
})