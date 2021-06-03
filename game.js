//input: none
//output: a String containing the value rock, paper, or scissors
function computerPlay(){
    //define array with the three choices
    let choices = ['rock', 'paper', 'scissors'];
    
    //create a random number between 0 and 2. To do this we will
    //need to create a random number and multiply it by 3, and then
    //round down because of the way javascript handles integers
    let number = Math.random() * 3;
    number = Math.floor(number);

    //return the element of the array corresponding to the random number we just generated
    return choices[number];
}

//input: two Strings, but containing one of "rock", "paper", or "scissors" as value
//output: a String stating whether the player won the round or the computer did
function playRound(playerSelection, computerSelection){
    //convert the player selection to lower case, in order to meet
    //the requirement that the input should not be case sensitive
    pselection = playerSelection.toLowerCase();

    //do nested if statements to check who won the round
    if(pselection == 'rock'){
        if(computerSelection == 'rock'){
            return "Tie game! Nobody wins!";
        }
        else if(computerSelection == 'paper'){
            return "You lose! Paper beats rock!";
        }
        else if (computerSelection == 'scissors'){
            return "You win! Rock beats scissors!";
        }
        else{
            return "Uh oh someone put in the wrong input!";
        }
    }
    else if (pselection == 'paper'){
        if(computerSelection == 'rock'){
            return "You win! Paper beats rock!";
        }
        else if(computerSelection == 'paper'){
            return "Tie game! Nobody wins!";
        }
        else if (computerSelection == 'scissors'){
            return "You lose! Scissors beat paper!";
        }
        else{
            return "Uh oh someone put in the wrong input!";
        }
    }
    else if(pselection == 'scissors'){
        if(computerSelection == 'rock'){
            return "You lose! Rock beats scissors!";
        }
        else if(computerSelection == 'paper'){
            return "You win! Scissors beat paper!";
        }
        else if (computerSelection == 'scissors'){
            return "Tie game! Nobody wins!";
        }
        else{
            return "Uh oh someone put in the wrong input!"
        }
    }
    else{
        return "Uh oh someone put in the wrong input!"
    }
}

//input: none
//output: also none, but this function will take a player input and have it play a game against the computer for 5 rounds
function game(){
    let playerInput, result;

    //create a loop that runs 5 times
    for(let i = 0; i < 5; i++){
        //take player input and assign it to the playerInput variable
        playerInput = window.prompt("Please enter one of rock, paper, or scissors", "rock");
        //call the playRound function while supplying playerInput and a randomly generated computerPlay value as the parameters, capturing the result in the variable result
        result = playRound(playerInput, computerPlay());
        //display the result
        console.log(result);
    }
}

game();