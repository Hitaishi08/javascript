// practice set

const prompt = require("prompt-sync")();

/*
let age = prompt("enter the age: ");
age  = Number.parseInt(age)
*/
/*
if(age >= 10 && age<=20)
    {
        console.log("your age is between 10-20: ", age);
    }
else
    {
        console.log("your age is not between 10-20: ", age);
    }
*/
// switch case:

/*
switch(age)
{
    case '12':
        console.log("your age is: ",age);
        break;
    case '13':
        console.log("your age is: ",age);
        break;
    case '14':
        console.log("your age is: ",age);
        break;
    case '15':
        console.log("your age is: ",age);
        break;
    default:
        console.log("you are not special");
}
        */

let num = prompt("enter the number: ")
num = Number.parseInt(num);

/*
if(num%2 == 0 && num%3 == 0)
    {
        console.log("number is divisible of 2 and 3");
    }
else
    {
        console.log("number is not divisible of 2 and 3");
    }

*/

// ternary operatory
let age = num
let a = age >= 18? "you can drive":"you can not drive"
console.log(a);