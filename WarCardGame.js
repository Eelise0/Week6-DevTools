
alert `----- Let's play War! ----
There are two players and the player with 
the highest value card at draw wins the point.
Whoever has the most points at the end wins!
The game will automatically begin when you click OK.
You won't see much on the screen but rest 
assured the game is happening! To see all the action, 
check out the Console. Good Luck!`

/************************ SHUFFLE **********************/

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  
  var mainDeck = [13, 13, 13, 13, 12, 12, 12, 12, 11, 11, 11, 11, 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1];
  shuffle(mainDeck);
  console.log(mainDeck);

/********************* DEALING ****************************/

var playerOneDeck = [];
var playerTwoDeck = [];


playerOneDeck = mainDeck.slice(0, 26);
console.log('Player One Deck: ' + playerOneDeck);

playerTwoDeck = mainDeck.slice(26, 52);
console.log('Player Two Deck: ' + playerTwoDeck);


/********************* COMPARING THE CARDS ********************/

var playerOneIndex = 0;
var playerTwoIndex = 0;
let playerOnePoints = [];
let playerTwoPoints = [];

{for (let i = 0; i < playerOneDeck.length; i++) {

    playerOneIndex = playerOneDeck[i];
    console.log('1: ' + playerOneIndex);

   playerTwoIndex = playerTwoDeck[i];
   console.log('2: ' + playerTwoIndex);

if (playerOneIndex > playerTwoIndex) {
    playerOnePoints.push(1);
} else if (playerTwoIndex > playerOneIndex) {
    playerTwoPoints.push(1);
} else {

}

console.log('Player 1 Points: ' + playerOnePoints);
console.log('Player 2 Points: ' + playerTwoPoints);

}}

/*********** TOTAL POINTS FOR EACH PLAYER ***************/

let totalForPlayerOne = 0;
 for (let i = 0; i < playerOnePoints.length; i++) {
    totalForPlayerOne += playerOnePoints[i];
 }
console.log('Total for Player One: ' + totalForPlayerOne);

 let totalForPlayerTwo = 0;
 for (let i = 0; i < playerTwoPoints.length; i++) {
    totalForPlayerTwo += playerTwoPoints[i];
 }
console.log('Total for Player Two: ' + totalForPlayerTwo);

/********** DECLARATION OF WINNER ********************/

if (totalForPlayerOne > totalForPlayerTwo) {
    alert (
    `---- Wow! Great job, Player 1! ----
    You have won the game with ${totalForPlayerOne} points! 
    Player 2, you only had ${totalForPlayerTwo}. Better luck next time!`);

} else if (totalForPlayerTwo > totalForPlayerOne) {
    alert (
    `---- Wow! Great job, Player 2! ----
    You have won the game with ${totalForPlayerTwo} points! 
    Player 1, you only had ${totalForPlayerOne} points. 
    Better luck next time!`);
} else 
    alert ('Looks like there was a tie! What are the chances of that?! Better luck next time!');
