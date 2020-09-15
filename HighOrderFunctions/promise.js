function userLoggin(email, password){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve( { userMail: email, password: password});
        }, 3000);
    });
}

// const user = userLoggin('ssrinath.sri@gmail.com', 'password', (user)=>{
//     console.log(user);
// });

userLoggin('ssrinath@gmail.com', 'password').then(user=>{
    console.log(user);
})


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
  console.log('myfather age is:' + myFather.age);


  const EventEmitter = require('events');

  const event = new EventEmitter();

  event.on('messagedLogged', ()=>{
      console.log('emitter fired');
  });

  event.emit('messagedLogged');


var arr = ['20','120','111','215','54','78'];
arr.sort(function(a,b){
    return b-a;
});
console.log(arr[2]);

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

let person = {
 name: 'srinath'
}

let student ={
empid : 234
}

const mergeObj = {...person, ...student}

console.log(mergeObj);


let person1 = {
    fullname : 'Muni prasad'
}

const cloneObj = {...person1};
console.log(cloneObj);

cloneObj.name= 'srinath';

console.log(cloneObj.name);




const sortarry = [
    { name: 'ABC', age: 21 },
    { name: 'ABCD', age: 30 },
    { name: 'ABC', age: 50 },
    { name: 'ABC', age: 19 },
    ];
sortarry.sort(function(a,b){
    return a.age - b.age;
})


let arry1 = ["text", "aba", "jsdv"];

let array2 = ["gfgf", "gdgdg", "djdjd"];

const array3 = arry1.concat(array2);
console.log(array3);

// copywithin 

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.copyWithin(2,3);