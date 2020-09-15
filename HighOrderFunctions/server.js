// Http server created for nodejs
const http = require('http');

http.createServer(function(req, res){
    res.write('Hello world');
    res.end;
}).listen(8080);

// Express server is created for express
const express = require('express');
var app = express();

app.get('/', function(req, res){
    res.write('Express server created');
    res.end;
});

app.listen(9000, function(req, res){
    console.log('Server created');
})



function userLogin(email, password, callback){
    setTimeout(()=>{
        callback( { userEmail: email})
    }, 5000);
}

function getSomeVideo(video, callback){
    setTimeout(()=>{
        callback(['video1', 'video2']);
    }, 2000);
}

const user = userLogin('srinath.sri@gmail.com', 123456789, user=>{
    console.log(user);
    getSomeVideo(user.userEmail, video=>{
        console.log(video);
    })
});


function myWorld(email){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        resolve({userMail: email})
        }, 2000);
    })
}