

// const dealerHand = document.getElementById("dealer-hand");
// const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank, //connecting the face cards (ace,jack,queen,king) to pointValues using 'if' statement: if the rank is bigger than 10 give it a rank of 10, else (the '?') give it its current rank
  };

  switch (card.rank) {
    case 1:
      card.rank = "Ace"; //card.rank access the 'card' object and the 'rank' key
      break; //exits the code when the condition is met

      case 11:
      card.rank = "Jack"; //card.rank access the 'card' object and the 'rank' key
      break; //exits the code when the condition is met

      case 12:
      card.rank = "Queen"; //card.rank access the 'card' object and the 'rank' key
      break; //exits the code when the condition is met

      case 13:
      card.rank = "King"; //card.rank access the 'card' object and the 'rank' key
      break; //exits the code when the condition is met

      default: //if nothing else is matching keep it moving. "Default" is a safety measure to be sure the other values are maintained
        break; //exits the code, so that this part of the function stops

  }
  deck.push(card);
};

for (let suit of suits) {//Outer Loop. Runs 1 time for every 13 times the Inner Loop runs, for a total of 4 times to iterate through the SUIT array. Variable 'suits' is a constant, but Line 15 is changing is, huh? Line 15 is actually REPLACING it after making a copy that is being pushed into by Line 15 and REPLACES THE ORIGINAL EMPTY ARRAY ON Line 15.
  for (const rank of ranks) {//Inner Loop. Runs 13 times for every 1 time the Outer Loop runs, for a total of 52 times (13x4) to iterate through the RANK array, then SUIT array.
    makeDeck(rank, suit);
  };
};


// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

// @ToDo1 Deal the cards
// Shuffle the cards [already shuffled]
// Deal 2 cards to each player
// Display those cards

let dealerHand = [], playerHand = [];

document.getElementById('deal-button').onclick = deck.pop(playerHand,dealerHand);

function dealCards(playerType) { //playerType is the parameter I'm passing through to deal the cards
  
  let dealer,player; // declared variables, DRY - Don't Repeat Myself - These variables can be declared at the same time

  if(playerType === 'dealer'){

    console.log('the dealCards for the dealer function') // view the cards dealt
//onclick I want one card to the dealer, one card to the player, second card to dealer, second card to player...like with the cookies from the array exercise
  }

  else { //else do this, deal to the player - player card dealing code

    console.log('the dealCards for the player function') // view the cards dealt


  }
}

// call function for testing only, this is in testing because this will be done with a BUTTON on HTML IRL
dealCards('dealer','player')


// @ToDo2 hitMe function to deal cards to player after the initial deal
//based on the "Hit" button

// @ToDo3 Dealer Stand Logic based on Stand Button

// @ToDo4 Count the cards and the points per player
// showDealerPoints, showPlayerPoints

// @ToDo5 Decide the winner and Reset the games

// Event listeners and HTML related code




// console.log(deck);
