//Game of War

//PRE GAME

// Create 2 players array, start them with nothing
// let playerOne = []
// let playerTwo = []

// create 52 card deck J,Q,K,A = 11-14
// const deckFull = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5,
//   6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10,
//   11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14]
// /* gotta be a cleaner way to do that ^ */


class Card{
  constructor (suit, rank, score){
  this.suit = suit
  this.rank = rank
  this.score = score
  }
}

class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
    this.shuffle()
    this.length = 52
  }
  
  createDeck() {
    let cardSuits = ["Clubs", "Diamonds", "Hearts", "Spades"]
    let cardRank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]

    for (let i = 0; i < cardSuits.length; i++) {
      for (let j = 0; j < cardRank.length; j++) {
        this.cards.push(new Card(cardSuits[i], cardRank[j], j + 2))
      }
    }
    return this.cards
  }
  // randomize the array, look into Fisher-yates ,method

  shuffle() {
    const copy = this.cards.slice();
    let result = [];
    while (copy.length > 0) {
      const randomIndex = Math.floor(Math.random() * copy.length)
      result.push(copy[randomIndex]);
      copy.splice(randomIndex, 1);
    }

    this.cards = result
    return result;
  };

  draw() {
    return this.cards.pop()
  }
}

let shuffledDeck = new Deck()
// shuffledDeck.shuffle()
// console.log(shuffledDeck)



// divide shuffleDeck into 2 equal subDeckOne and subDeckTwo and assign to players

class GameofWar {
  constructor() {
    this.playerOne = []
    this.playerTwo = []
    this.pile = [] //for war pile
    this.gameSetup()
  }

  gameSetup() {
    const deck = new Deck()
    let cards = deck.cards

    this.playerOne.push(...cards.slice(0, cards.length / 2))
    this.playerTwo.push(...cards.slice(cards.length / 2))
  }
  
}
  let game = new GameofWar
console.log(game)
console.log(GameofWar.playerOne)

//GAME

// players compare spot (0) of the array (make an if/else of subDeckone(0) < , > , == )
  // "cardOne is <,> than CardTwo playerOne/Two wins the round"
    // both players SHIFT() the top card, then winner PUSH(x ,y) both cards

    //IN CASE OF WAR

    // console.log the = with a note "its time for war"
    // create a WarStack Array, Slice(1) the two equal cards into array
    // both players SLICE(1-3) top 3 cards into WarStack
    // compare top of decklist, 
    //create a console log of who wins war
    // winner PUSH(WarStack) to their list
    // both players SHIFT() the top card, then winner PUSH(x ,y) both cards