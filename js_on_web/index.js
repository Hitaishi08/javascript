/*
ALERT , PROMT AND CONFIRM

ALERT :  to guid the user. to alert the user that u should do this or not.
         it is a pop up box with ok button which return true.

PROMPT: to take any value as a input from the user (it will be a string)
        you need to typecast the value to change the data type.

CONFIRM: it is pop up used to confirm the user action to make sure.
        it return true for ok or false for the cancle.

*/

alert("enter the value of a");
let a  = prompt("enter a",10);

//NOTE: prompt take two arguments 1. write a text (it will take the value) 2. default value

a = Number.parseInt(a);

alert(`type of a is ${typeof a}`);

const write = confirm("do you want to write it??");

if(write)
    {
        document.write(a);
    }
else
{
    document.write("allow me to write");
}

// Limitatiomns of these:
// 1. they block the main execution thread of a javascript which is not good
//    means  untill you tell what number u want to write the code will not execute
//   the hello world will shown up when u tell the number and confirm 