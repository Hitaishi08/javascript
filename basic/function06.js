// FUNCTIONS 

// old way to wtite function
function sum(a,b){
    // console.log("sum: ", a+b);
    return sum;
}

// perfer this way to write a function (new way)
const product = (a,b) =>
    {
        console.log(a*b);
    }

// function without argument

const print = () =>
    {
        console.log("hello world");
    }

let  prompt = require("prompt-sync")();
let a = prompt("enter a: ");
let b = prompt("enter b: ");
a = Number.parseInt(a);
b = Number.parseInt(b);

// sum(a,b);

// arrow function
product(a,b);
print();