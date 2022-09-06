
/************************ SHUFFLING**********************/

function shuffle(deck) {
    let currentIndex = deck.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
  
    return deck;
  }
  
  // Used like so
  var mainDeck = ['A', 'A', 'A', 'A', 'K', 'K', 'K', 'K', 'Q', 'Q', 'Q', 'Q', 'J', 'J', 'J', 'J', 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2];
  shuffle(mainDeck);
  console.log(mainDeck);

/********************* DEALING ****************************/

var playerOneDeck = [];
var playerTwoDeck = [];


playerOneDeck = mainDeck.slice(0, 26);
console.log('Player One Deck: ' + playerOneDeck);

playerTwoDeck = mainDeck.slice(26, 52);
console.log('Player Two Deck: ' + playerTwoDeck);

/*************************************************/

// while (playerOneDeck.length > 0 && playerTwoDeck.length > 0) {
//     for (i = 0; i < playerOneDeck.length; i++) {
//         cardDrawnOne = null;
//         cardDrawnTwo = null;
//         cardDrawnOne = cardDrawnOne + playerOneDeck[i];
//         cardDrawnTwo = cardDrawnTwo + playerTwoDeck[i]; }
//         if (cardDrawnOne > cardDrawnTwo) {
//             playerOnePoints = [];
//             playerOnePoints.push(1);
//             alert `1 point for Player One!`;
//         } else if (cardDrawnTwo > cardDrawnOne) {
//             playerTwoPoints = [];
//             playerTwoPoints.push(1);
//             alert `1 point for Player Two!`;
//         } else {
//             alert `It's a draw! No points for either player!`;
//         }
//         }
       

