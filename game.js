let playerscore = 0;
let computerscore = 0;
let images = document.querySelectorAll(".choices");

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
//output: -1 if the player loses, 1 if the player wins, 0 if it is a tie game
function playRound(playerSelection, computerSelection){
    //convert the player selection to lower case, in order to meet
    //the requirement that the input should not be case sensitive
    pselection = playerSelection.toLowerCase();

    //do nested if statements to check who won the round
    if(pselection == 'rock'){
        if(computerSelection == 'rock'){
            return 0;
        }
        else if(computerSelection == 'paper'){
            return -1;
        }
        else if (computerSelection == 'scissors'){
            return 1;
        }
        else{
            return NaN;
        }
    }
    else if (pselection == 'paper'){
        if(computerSelection == 'rock'){
            return 1;
        }
        else if(computerSelection == 'paper'){
            return 0;
        }
        else if (computerSelection == 'scissors'){
            return -1;
        }
        else{
            return NaN;
        }
    }
    else if(pselection == 'scissors'){
        if(computerSelection == 'rock'){
            return -1;
        }
        else if(computerSelection == 'paper'){
            return 1;
        }
        else if (computerSelection == 'scissors'){
            return 0;
        }
        else{
            return NaN;
        }
    }
    else{
        return NaN;
    }
}

//add click listeners to all 3 images
images.forEach((image) => {
    image.addEventListener('click', function(e) {
        let gameresult = playRound(e.currentTarget.id, computerPlay());

        if(playerscore + computerscore == 5){
            document.getElementById('status').innerHTML = "Game is over! Please refresh page to play again!";
            return;
        }

        if(gameresult == -1){
            computerscore++;
            document.getElementById('status').innerHTML = "Status: computer wins the round!";
        }
        else if(gameresult == 1){
            playerscore++;
            document.getElementById('status').innerHTML = "Status: player wins the round!"
        }
        else{
            document.getElementById('status').innerHTML = "Both players selected the same item. Nobody wins!"
        }

        if(computerscore + playerscore == 5){
            if(computerscore < playerscore){
                document.getElementById('status').innerHTML = "Player wins the game!";
            }
            else{
                document.getElementById('status').innerHTML = "Computer wins the game!";
            }
        }
        document.getElementById('scoreboard').innerHTML = `Player score: "${playerscore}"  Computer score: "${computerscore}"`;



    });
});

scoreboard = document.getElementById('scoreboard').addEventListener('click', testClick);