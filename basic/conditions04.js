// conditional statements: sometimes we want to execute a block of code based of some conditions

console.log("conditional expression");

// three forms
/*
1. if
2. if-else
3. nested if-else
 */

// NOTE: whaterver you prompt it will be of string data type

const prompt = require("prompt-sync")();
let a;
// let a = prompt("enter your age: ") // a will always be a string

console.log(typeof a);

// converting string into integer (type casting):
a = Number.parseInt(a)

console.log(typeof a)

if(a<0)
{
    console.log("this is a invalid age");
}
else if(a<9)
{
    console.log("you are a kid dont even think of driving");
}
else if(a<18 && a>9)
{
    console.log("you are a kid you can think of drving after 18");
}
else
{
    console.log("you can drive as your age is valid");
}

// switch case

let day = prompt("enter any day: ");
switch (day)
{
    case "monday":
        console.log("pasta day");
        break;
    case "tuesday":
        console.log("pizza day");
        break;
    case "wednesday":
        console.log("salad day");
        break;
    case "thursday":
        console.log("noodles day");
        break;
    case "friday":
        console.log("garlic bread day");
        break;
    case "saturday":
        console.log("yeahhh weakend");
        break;
    case "sunday":
        console.log("workout day");
        break;
    default:
        console.log("work hard");
}