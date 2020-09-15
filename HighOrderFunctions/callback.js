function myFun(){
    console.log('First Call back function');
}

console.log('Start From ');
myFun();
console.log('end Function here');


setTimeout(()=>{
    console.log("Helllo world");
}, 3000)
