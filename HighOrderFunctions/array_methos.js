// concat() >> The concat() method is used to join two or more arrays.
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);

console.log('concat Value', children);


// copyWithin() >> The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);

console.log('copyWithin Value', fruits);

// entries() >> The entries() method returns an Array Iterator object with key/value pairs.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var f = fruits.entries();

// for (x of f) {
//   document.getElementById("demo").innerHTML += x;
// }

// every()
// fill()
// filter()
// find()
// findIndex()
// forEach()
// from()
// includes()
// indexOf()
// isArray()
// join()
// keys()

// lastIndexOf()
// map()
// pop()

// push()
// reduce()
// reduceRight()
// reverse()
// shift() --> The shift() method removes the first item of an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruitsValue = fruits.shift();
console.log(fruitsValue);
// slice() --> The slice() method returns the selected elements in an array, as a new array object.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);
// some() --> 
// sort() -- > By default, the sort() method sorts the values as strings in alphabetical and ascending order.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var sortvalur = fruits.sort();
console.log(sortvalur);
// splice() --> The splice() method adds/removes items to/from an array, and returns the removed item(s).

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var splicevalue = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(splicevalue);

// toString() --> The toString() method returns a string with all the array values, separated by commas.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toString();
console.log(x);

// unshift() -- > The unshift() method adds new items to the beginning of an array, and returns the new length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var unshoft = fruits.unshift("Lemon","Pineapple");
console.log(unshoft);


// valueOf()-->  fruits.valueOf() will return the same as fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v = fruits.valueOf();
console.log(v);
