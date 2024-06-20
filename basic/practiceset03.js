let prompt = require("prompt-sync")();

const marks = {
    riya: 43,
    piya: 54,
    rohan: 42,
    ahaana: 45
}

/*
for(let i =0;i<Object.keys(marks).length;i++)
    {
        console.log("marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
    }
*/

// another way to print: 
/*
for(let key in marks)
    {
        console.log("marks of " + key + " is " + marks[key])
    }
*/

/*
let correctnum = 10;
let num
do{
    num = prompt("enter number: ");
    console.log("try again");
}while(num != correctnum)

console.log("congratulations you did it!!");
*/


const mean = () =>{
    let n = prompt("enter the queries: ");
    let mean = 0;
    for(let i = 1;i<=n;i++)
        {   
            let num = prompt("enter number" + i + ": ");
            num = Number.parseInt(num);
            mean += num;
        }
    return mean/n;
}

let ans = mean();
console.log("mean is: ", ans);