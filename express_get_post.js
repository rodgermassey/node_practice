const { response } = require('express');
let express = require('express');
let app = express();
let bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/hello/:temp?',(request, response)=>{
    console.log('I am a get request!')
    //************THESE LINES WILL GIVE AN ERROR IF I USE ANY 2 OF THEM THERE SHOULD BE ONLY ONE OF THEM .SENDSTATUS OR STATUS OR SEND OR JSON */
    // response.sendStatus(500) 
    // response.status(500).json({message: 'Error has occured'})
    // response.send('Hello') //[Error : Cannot set headers after they are sent to the client] if this line is used after response.status() or response.sendStatus() or response.json()
    let name = request.query.name;
    let temp = request.params.temp;
        response.json({
            temp: temp,
            name: name,
        });
    // response.json({message: 'Hi i am a JSON message from the server!'}) 
})
app.get('/usr',(req, res)=>{
    console.log('I am second get request!');
    let name = req.query.name;
    res.send(name);
})

app.post('/post_data',(req,res)=>{
    console.log('I\'m inside Post request')
    console.log(req.body)
    res.send(req.body)
    // res.json(req.body)
})

app.listen(9000, ()=>{
    console.log('I am listening on port 9000!')
})