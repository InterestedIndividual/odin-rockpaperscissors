function computerPlay(){
    choice = Math.floor(Math.random()*3)
    if (choice == 0){
        return "rock"
    }
    else if (choice == 1){
        return "paper"
    }
    else if (choice == 2){
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === playerSelection.toLowerCase()){
    playerSelection = playerSelection.toLowerCase()}
    if (computerSelection === computerSelection.toLowerCase()){
        computerSelection = computerSelection.toLowerCase()
    }
    if (playerSelection=="rock"){
        player = 1;
    }
    else if (playerSelection=="paper"){
        player = 2;
    }
    else if (playerSelection=="scissors"){
        player = 3;
    }
    if (computerSelection=="rock"){
        computer = 1;
    }
    else if (computerSelection=="paper"){
        computer = 2;
    }
    else if (computerSelection=="scissors"){
        computer = 3;
    }
    if (player>computer){
        console.log('You Win! ' + playerSelection + ' beats ' + computerSelection);
        return 1
    }
    else if (player<computer){
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection);
        return 2
    }
    else if (player == computer){
        console.log('You Tie! You both picked ' + playerSelection);
        return 0
    }
}

function game(games = 5){
    for (let i = 0; i < games; i++){
        playerScore = 0
        computerScore = 0
        playerSelection = prompt("What will you play?")
        // playerSelection="rock"
        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection)
        if (result == 1){
            playerScore += 1
        }
        else if (result == 2){
            computerScore += 1
        }
        console.log('The score is ' + playerScore + ":" + computerScore)
    }
}

game()
// playRound('rock', computerPlay())
