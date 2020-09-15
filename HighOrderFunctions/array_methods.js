// concat()
var setList1 = [1, 2, 2, 3, 3, 4, 4, 4];
var setList2 = [2, 3, 3, 3, 4, 4, 4, 4, 4, 4];
const finallconcat = setList1.concat(setList2);
console.log(finallconcat);
// copyWithin()
var copywithInArray = ['abcs', 'test', 'yxx', 'hwllo'];
const coyvalue = copywithInArray.copyWithin(1, 2);
console.log(coyvalue);
// entries()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();
console.log(f);
// every() ---> I need to check 

// fill()
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
var fillarray = fruits1.fill('sri');
console.log(fillarray);
// filter()
// find()
// findIndex()
// forEach()
// from()
// includes()
// indexOf()
// isArray()
// join()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
console.log(energy);
// keys()
// lastIndexOf()
// map()
// pop()
// push()
// reduce()
// reduceRight()
// reverse()
// shift()
// slice()
// some()
// sort()
// splice()
// toString()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toString();
console.log(x);
// unshift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var justunshift = fruits.unshift("Lemon", "Pineapple");
console.log('just ', justunshift);

// valueOf()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v = fruits.valueOf();
console.log(v);


var myName = 'SRINATH ';
var justtext = myName.split('').reverse().join('');

console.log(justtext);

let person = {
    fullname: 'prasad',
    emailid: 'prasad@gmail.com'

}

let std = {
    empId: 123,
    address: 'hello world'
}

const neOjb = { ...person, ...std }

console.log('just i have crated new obj', neOjb);
