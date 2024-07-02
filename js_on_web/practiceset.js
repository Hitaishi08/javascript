// practice set 

/*
let playagain = true;
while(playagain){
let age = Number.parseInt(prompt("enter your age"))
if(age < 0)
    {
        console.error("enter a valid age")
        break;
    }
else if(age < 18)
    {
        alert("you can not drive")
    }
else
    {
        alert("yes you can drive")
    }
playagain = confirm("do you wanna enter age again??")
}
*/

// if number is greater than 4 redirect to google

/*
let num = Number.parseInt(prompt("enter a num"));

if(num>4)
    {
        location.href = "https://google.com"
    }
*/
// let user enter the color and change the backgroundt to that color

let color = prompt("enter a color")

document.addEventListener('DOMContentLoaded', function(){
    document.body.style.background = color
})