// types of loops
/* 
    1. for loop
    2. for in loop
    3. for of loop
    4. while loop
    5. do while loop
*/

let prompt = require("prompt-sync")();

// FOR LOOP

/*
let sum = 0;
let  n = prompt("enter the number: ");
for(let i =0;i<=n;i++)
    {
        sum += i;
    }
console.log("sum: ",sum);
*/

// FOR IN LOOP (also work with arrays)
// loop through the keys of the object
let obj = 
{
    a: 95,
    b: 45,
    c: 56,
    d: 57,
    e: 23
}

for(let i in obj)
    {
        console.log("marks of " + i + " are " + obj[i] )
    }

// FOR OF LOOP (it does not work on object)
// it loops through the values 
for(let b of "hitaishi")
    {
        console.log(b);
    }

// WHILE LOOP
/*
let i = 0;
let n = 5;

while(i<=n)
    {
        console.log(i);
        i++;
    }
*/

// DO WHILE LOOP (it will execute at least 1 time)
let i =0;
let n = 10;
do{
    console.log(i);
    i++;
}while(i<n)