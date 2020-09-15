// Http server created for nodejs
const http = require('http');

http.createServer(function (req, res) {
    res.write('Hello world');
    console.log('Http server create');
}).listen(4000, () => { console.log('server started successfully') });
// Express server is created for express

const express = require('express');

const app = express();
app.get(function (req, res) {
    res.write('express , Hello world');
});

app.listen(5000, () => { console.log('express server created successfully') });

setTimeout(() => {
    console.log('knowing just callback function');
}, 5000);

function userLoggin(email, callback) {
    setTimeout(() => {
        console.log('checking callback function');
        callback({ usetMail: email })
    }, 5000);
}
function myVideo(video, callback) {
    setTimeout(() => {
        callback(['video1', 'video2']);
    }, 5000);
}

const user = userLoggin('ssrinath.sri@gmail.com',
    (user) => {
        console.log(user);
        myVideo(user.usetMail, (video) => {
            console.log(video)
        });
    });

function reverstring(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}
console.log(reverstring('Hello world'));


var heLLO = ' Test file';

var reverse = heLLO.split(' ').reverse().join(' ');

console.log(reverse);



function restring(str) {
    var s = '';
    for (var i = str.length - 1; i >= 0; i--)
        s += str[i];
    return s;
}
console.log(restring('Hello world tet file'));


////////////////////////////////////////////////////////////////////
function userLoggin(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('checking data');
            resolve({ userEmail: email });
        }, 5000);
    });
};

// const user = userLoggin('ssrinath.sri@gmail.com', user=>{
//     console.log(user);
// })

userLoggin('ssrinath.sri@gmail.com').then(user => {
    console.log(user);
})