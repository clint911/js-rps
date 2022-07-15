//we have 6 functions to implement
//getComputerChoice randomly selects between our options and returns a string
const totalScores ={computerScore : 0, playerScore : 0}
const  getComputerChoice = (rpsChoice) => {/**code here you funcking dummy */
    //generating a random number between 0 and 2  2 inclusive and map it to rock paper sciscors
    const randomNumber =  Math.floor(Math.random() * rpsChoice.length);
   
    return rpsChoice[randomNumber];
    
  
}
const rpsChoice = ['Rock', 'Paper', 'Scissors'];
console.log(rpsChoice);
console.log(getComputerChoice(rpsChoice));

//getResult compares playerChoice & ComputerChoice and returns the score accordingly
function getResult(playerChoice, ComputerChoice) {/**code here fucking amateur */
        let score;
        //all draw situations set score to 0
            if(playerChoice == ComputerChoice) {
                        score = 0;
            } else if (playerChoice == 'Rock' && ComputerChoice == 'Scissors') {
                score = 1;

            } else if (playerChoice == 'Paper' && ComputerChoice == 'Rock') {
                score = 1;
            } else if (playerChoice == 'Scissors' && ComputerChoice == 'Paper') {
                score = 1;

}
    if (playerChoice === ComputerChoice) {
                console.log('Its a fucking draw you idiots');
    } else if (playerChoice == 'Scissors' && ComputerChoice == 'Paper') {
        console.log('Human wins against old rusty computer');
    } else if (playerChoice == 'Rock' && ComputerChoice == 'Scissors' || ComputerChoice == 'Paper') {
        console.log('Fucking old computer loses. Human Wins');
    } else if (ComputerChoice == 'Rock' && playerChoice == 'Scissors' || playerChoice == 'Paper') {
        console.log('Meat brained Human loses, Computer wins!');
    } else if (ComputerChoice == 'Scissors' && playerChoice == 'Paper') {
        console.log("Computer wins, Humans are fucking amateurs");
    } else {
        console.log("I have a deadly bug that impedes my functionality, please fix me oh great programmer");
    }
   
    


}

//showResult updates to the dom you win you lose or draw based on the score.also shows player choice vs comp choice
function showResult(score, playerChoice, ComputerChoice){/**code here mf */
        let score = 0;
        const resultDiv = document.getElementById('result');
        const handsDiv = document.getElementById('hands');
        const playerScoreDiv = document.getElementById('score');
        if (score = -1) {
            'You Lose'

         } else if (score = 1) {

           } else {

           } 
           
}

//calculates who won and shows it on the screen
function onClickRPS(playerChoice) {/**code here dummy */
    console.log(playerChoice);
    const ComputerChoice = getComputerChoice()
    console.log(ComputerChoice);
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score;
    console.log(totalScore);
    console.log({score});
    showResult(score, playerChoice, computerChoice);
}

//making the rps button actively listen for a click and do sth once a clikc is detected
function playGame(){/**code inside here bro 
//use query selector to select all RPS buttons
//add an event listener to each RPS button so every time you click it, it calls the onClickRPS function with the last RPS button that was last clicked
//loop through the buttons using a forEach loop
//add an onClick event listener to each button
//call the onClickRPS function every time someone clicks
//make sure to pass the currently selected rps button as an argument
//add a click listener to the end game button that runs the endGame() function on click

*/
document.querySelectorAll('.rpsButton');
rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
})
const endGameButton = document.getElementById('endGameButton');
endGameButton.onClick = () => endGame(totalScore) {
    totalScore['playerScore'] = 0;
    totalScore['computerScore'] = 0;

    resultDiv.innerText = ' ';
    handsDiv.innerText = ' ';
    playerScore.innerText = ' ';
}
};

//endGame function clears all the text on the DOM
function endGame() {


}

playGame()


























9999