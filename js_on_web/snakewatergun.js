randomnum = (min,max) =>{
        return Math.floor(Math.random()*(max - min) +1) + min;
}

const content = ["snake","water","gun"];
let turn = 5;
let upoint = 0;
let compoint = 0;

gameon = true;
while(gameon)
{
    let player = prompt("your turn");
    comp = content[randomnum(0,2)];
    if(turn == 0)
        {   
            if(upoint > compoint)console.log(`you win with scores ${upoint}`)
            else console.log(`computer win with scores ${compoint}`)
            gameon = confirm("do you wanna play again(true/false)")
            if(gameon)
                {   
                    turn = 5;
                    upoint = 0;
                    compoint = 0;
                    continue;
                }
            else break;
        }
    if(player === comp)
        {
            console.log("no scores");
        }
    else if(player == "snake" && comp == "gun")
        {
            console.log("computer get a point");
            compoint++;
        }
    else if(player == "gun" && comp == "snake")
        {
            console.log("you get a point");
            upoint++;
        }
    else if(player == "snake" && comp == "water")
        {
            console.log("you get a point");
            upoint++;
        }
    else if(player == "water" && comp == "snake")
        {
            console.log("computer get a point");
            compoint++;
        }
    else if(player == "water" && comp == "gun")
        {
            console.log("you get a point");
            upoint++;
        }
    else 
        {
            console.log("computer get a point");
            compoint++;
        }
    turn--;
}

