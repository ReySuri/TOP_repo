function getComputerChoice() {
    let play;
    let num = Math.floor(Math.random() * 3);
    if(num == 0)
        play = 'rock';
    else if(num == 1)
        play = 'scissor';
    else 
        play = 'paper';
    return play;
}

function playRound(playerSelection, compSelection){
    let result = 'You win!';
    switch(playerSelection.toLowerCase()){
        case 'scissor':
        {    
            if(compSelection === 'scissors'){
                result = 'It is a draw!'
                return result;
            } else if(compSelection === 'rock'){
                result = 'You lose!'
                return result;
            } else
                return result;
        }
        case 'rock':
        {    
            if(compSelection === 'scissors'){
                return result;
            } else if(compSelection === 'rock'){
                result = 'It is a draw!';
                return result;
            } else
                result = 'You lose!';
                return result;
        }
        case 'paper':
        {
            if(compSelection === 'scissors'){
                result = 'You lose!';
                return result;
            } else if(compSelection === 'rock'){
                return result;
            } else
                result = 'It is a draw!';
                return result;
        }
    }
}

function game(){

    for(i = 0; i < 5; i++)
    {
        let compSelection = getComputerChoice();
        let playerSelection = prompt('What will you play?');
        console.log("Comp choice: ", compSelection);
        console.log("Your choice: ", playerSelection);
        console.log(playRound(playerSelection, compSelection));
    }
}

console.log(game());