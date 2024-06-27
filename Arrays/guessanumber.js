/*we need to create a game called  "guess a number" in which we need to genrate a random number
and user has to guess the number.you also have to give some hint like if the number is 
greater than the original number or smaller than the original number.if user guess the number close
the game and give the score out of 100%*/

let prompt = require("prompt-sync")();

RandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let number  = RandomNumber(20,200)

let usernum = prompt("enter a number: ");
usernum = Number.parseInt(usernum);

let guesses = 0;

let gamenotover = true

while(gamenotover)
    {
        if(usernum === number)
            {
                gamenotover = false;
                break;
            }
        else if(usernum > number)
            {
                console.log("number you guesses is greater than the original number");
            }
        else if(usernum < number)
            {
                console.log("number you guesses is smaller than the original number");
            }
        
        usernum = Number.parseInt(prompt("enter a number: "));
        guesses++;
    }

    console.log(`congratulation you guessed a number!!!! \nyour score is ${100-guesses}`);
    console.log(`original number: ${number} \nyour guess: ${usernum}`)