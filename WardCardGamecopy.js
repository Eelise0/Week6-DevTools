alert `----- Let's play War! ----
There are two players and the player with 
the highest value card at draw wins the point.
Whoever has the most points at the end wins!
The game will automatically begin when you click OK.
You won't see much on the screen but rest 
assured the game is happening! To see all the action, 
check out the Console. Good Luck!`


class Player {
    constructor(name, deck) {
    this.name = name;
    this.deck = deck;
    this.totalPoints = 0;
}
}

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
  const cardValueMap = {
    j: 11,
    q: 12,
    k: 13,
    a: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10
  }
  
  var mainDeck = ['k', 'k', 'k', 'k', 'q', 'q', 'q', 'q', 'j', 'j', 'j', 'j', 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 'a', 'a', 'a', 'a'];
  console.log('New Deck of Cards: ' + mainDeck);
  console.log('---------------------------------------------------');
  
  shuffle(mainDeck);
  console.log('Shuffled Deck of Cards: ' + mainDeck);
  console.log('---------------------------------------------------');

/********************* DEALING ****************************/

const player1 = new Player('Player 1', []);
player1.deck = mainDeck.slice(0, 26);
console.log('Player One Deck: ' + player1.deck);

const player2 = new Player('Player 2', []);
player2.deck = mainDeck.slice(26, 52);
console.log('Player Two Deck: ' + player2.deck);
console.log('---------------------------------------------------');


/********************* COMPARING THE CARDS ********************/

playerOneCard = 0;
playerTwoCard = 0;
player1.score = 0;
player2.score = 0;

{for (let i = 0; i < player1.deck.length; i++) {

    playerOneCard = player1.deck[i]; // player1.deck[i]
    console.log('1: ' + playerOneCard);

   playerTwoCard = player2.deck[i];
   console.log('2: ' + playerTwoCard);

if (cardValueMap[playerOneCard] > cardValueMap[playerTwoCard]) {
    player1.score++;

} else if (cardValueMap[playerTwoCard] > cardValueMap[playerOneCard]) {
    player2.score++;

} else { }


console.log('Player 1 Points: ' + player1.score);
console.log('Player 2 Points: ' + player2.score);
console.log('---------------------------------------------------');
}

/*********** TOTAL POINTS FOR EACH PLAYER ***************/

console.log('Total for Player One: ' + player1.score); //player1.score

console.log('Total for Player Two: ' + player2.score);

/********** DECLARATION OF WINNER ********************/

if (player1.score > player2.score) {
    alert (
    `---- Wow! Great job, Player 1! ----
    You have won the game with ${player1.score} points! 
    Player 2, you only had ${player2.score}. 
    Better luck next time!`);

} else if (player2.score > player1.score) {
    alert (
    `---- Wow! Great job, Player 2! ----
    You have won the game with ${player2.score} points! 
    Player 1, you only had ${player1.score} points. 
    Better luck next time!`);
} else 
    alert (
        `Looks like there was a tie! What are the chances of that?! 
            Better luck next time!`);
}
