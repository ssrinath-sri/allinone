
const companies = [
    { name: "Copany one", category: "Finance", start: 2002, end: 2003 },
    { name: "Copany two", category: "Retails", start: 1990, end: 2003 },
    { name: "Copany three", category: "Auto", start: 2002, end: 2003 },
    { name: "Copany four", category: "Technology", start: 2000, end: 2003 },
    { name: "Copany five", category: "Auto", start: 2001, end: 2003 },
    { name: "Copany six", category: "Retails", start: 2002, end: 2003 },
    { name: "Copany seven", category: "Auto", start: 2003, end: 2003 },
    { name: "Copany eight", category: "Finance", start: 2002, end: 2003 },
    { name: "Copany nine", category: "Technology", start: 2002, end: 2003 },
];

const ages = [33, 23, 21, 25, 24, 36, 46, 47, 46, 48, 23, 23, 24, 24];

// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }

companies.forEach(function (company) {
    console.log(company);
})

companies.forEach(function (company) {
    console.log(company.name)
})


let canDrinks = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
})
console.log(canDrinks);

const canDrink = ages.filter(age => age > 21);
console.log(canDrink);

const listOfCopanies = companies.filter(company => company.category === "Auto");



const listOfcompany = companies.filter(zzz => zzz.category === "Technology");

console.log(listOfcompany);

const oldCompaniesList = companies.filter(zzz => zzz.name);

console.log('Checking filter', oldCompaniesList);

const checkMaxValue = Math.max(...ages);
console.log(checkMaxValue);

const checkMinValue = Math.min(...ages);

console.log(checkMinValue);


// Create server using nodejs
const http = require('http');
http.createServer(function (req, res) {
    res.write('Hello World for creating server');
    res.end;
}).listen(8000);

// create server using express js
const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    var resCompanies = res.json(companies);
    console.log(resCompanies);

})

app.get('/', function (req, res) {
    res.write('Hello world');
})

app.listen(5000);


let checkingPromiseValue = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
})
console.log(checkingPromiseValue);
checkingPromiseValue();


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

asyncCall();

// let addNumber = function(email, fullname){
//     setTimeout(()=>{
//         return ({userName: email})
//     }, 30003);
// }
// function addNumber(email, callback){
//     setTimeout(()=>{
//         callback("just checking the callba ck funxgtipn")
//     })

// }

