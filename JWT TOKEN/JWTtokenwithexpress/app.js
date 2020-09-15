var express = require('express');
var jsontoken = require('jsonwebtoken');
var app = express();

app.get('/api', (req, res)=>{

});

app.post('/api/post', (req, res)=>{

});

app.post('/api/loggin', (req, res)=>{
    const user = {
        id: 1,
        username: 'srinath',
        email: 'srinath@gmail.com'
    }
    console.log('hjko')
    jsontoken.sign({user: user}, '1233', (err, token)=>{
        res.json({
            token
        });
    });
});

app.listen(2000, ()=> console.log('server started'));