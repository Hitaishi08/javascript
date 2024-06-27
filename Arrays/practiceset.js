// chapter 5 practice set
// practice problem 1
let prompt = require("prompt-sync")();

let arr = [1,2,3,4,5,6,7,83]

let a = prompt("enter a number: ");

a = Number.parseInt(a)

arr.push(a);

console.log(arr)

// Q3 keep adding numbers to the array until 0 if user enter 0 then stop

let arr2 = []
let a1;
do{
    a1 = prompt("enter a number: ");
    a1 = Number.parseInt(a1);
    arr2.push(a1);
}while(a1 != 0)

console.log(arr2);

// problem sum of array
/*
let sum = 0;

for(let i = 0;i<arr.length;i++)
    {
        sum += arr[i];
    }

console.log(`sum of an array is: ${sum}`)
*/

// problem: use filter numbers divisible by 10 from a given array

let arr3 = [10,32,4,60,21,100,45,30,50,120]

let myarr = arr3.filter((value)=>{
        return value % 10 === 0;
});

console.log(myarr);

// problem: create an array of square of given array

let newarr = arr2.map((value)=>{
    return value*value;
})

console.log(newarr);

// problem use reduce to calculate factorial of a given number from an array of first n natural numbers.

let arr5 = [1,2,3,4,5]
let fact = 0;
fact = arr5.reduce((ans,value)=>{
        ans *= value;
        return ans;
},1);

console.log(`factorial of a number is: ${fact}`);