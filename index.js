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
    let cardRank = ["2", "3", "4", "5", "6","7", "8", "9", "10","Jack","Queen", "King","Ace"]

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
//   draw() {
//     return this.cards.pop()

// }
}

// let shuffledDeck = new Deck()
// shuffledDeck.shuffle()
// console.log(shuffledDeck)



// divide shuffleDeck into 2 equal playerOne and playerTwo and assign to players

class GameofWar {
  constructor() {
    this.playerOne = []
    this.playerTwo = []
    this.warPile = [] //for war pile
    this.gameSetup()
    this.round()
  }

  gameSetup() {
    const deck = new Deck()
    let cards = deck.cards
    
    this.playerOne.push(...cards.slice(0, cards.length / 2))
    this.playerTwo.push(...cards.slice(cards.length / 2))

    console.log(`p1`, this.playerOne.length, `p2`, this.playerTwo.length)
  }
  


  round() {
    // put on a while loop until a player runs out of cards or a war triggers
    while (this.playerOne.length > 0 && this.playerTwo.length > 0) {
      let p1Card = this.playerOne.pop() // {rank, suit, score}
      let p2Card = this.playerTwo.pop()

      if (p1Card.score > p2Card.score) {
        this.playerOne.unshift(p1Card, p2Card, ...this.warPile)
        console.log(` ${p1Card.rank} of ${p1Card.suit} is greater than ${p2Card.rank} of ${p2Card.suit}, Player One wins! ${this.playerOne.length} to ${this.playerTwo.length} cards`);
        this.warPile.length = 0
      }

      else if (p2Card.score > p1Card.score) {
        this.playerTwo.unshift(p1Card, p2Card, ...this.warPile)
        console.log(` ${p2Card.rank} of ${p2Card.suit} is greater than ${p1Card.rank} of ${p1Card.suit}, Player Two wins! ${this.playerOne.length} to ${this.playerTwo.length} cards`);
        this.warPile.length = 0
      }
      else {
        console.log(`${p1Card.rank} equals ${p2Card.rank}! War has commenced!`)
        this.declareWar(p1Card, p2Card)
      }
    }
    if (this.playerOne.length == 0) {
      console.log(`p2`, this.playerTwo.length)
      console.log(`Player Two Wins the Game!!!`)
    }
    else if (this.playerTwo.length == 0) {
      console.log(`p1`, this.playerOne.length)
      console.log(`Player One Wins the Game!!!`)
    }
  }

  declareWar(c1, c2) {
    this.warPile.push(c1, c2)
    if (this.playerOne.length >= 4 && this.playerTwo.length >= 4) {
      this.warPile.push(...this.playerOne.splice(this.playerOne.length - 3, 3))
      this.warPile.push(...this.playerTwo.splice(this.playerTwo.length - 3, 3))
      console.log(this.warPile)
    }
    else if (this.playerOne.length > 4 && this.playerTwo.length < 4) {
      this.playerOne.unshift(...this.warPile)
      this.playerOne.unshift(...this.playerTwo.splice(0))
      this.warPile.length = 0
    }
    else if (this.playerTwo.length > 4 && this.playerOne.length < 4) {
      this.playerTwo.unshift(...this.warPile)
      this.playerTwo.unshift(...this.playerOne.splice(0))
      this.warPile.length = 0
    }
    console.log(`The War Pile contians ${this.warPile.length} cards. Let the battle begin!`)
  }
}
  let game = new GameofWar()

  

    //   if (p1Card.score > p2Card.score) {
    //     console.log(` ${p1Card.rank} of ${p1Card.suit} is greater than ${p2Card.rank} of ${p2Card.suit}, Player One wins the War!`);
    //     this.playerOne.unshift(this.warPile)
    //   }
    //   else {
    //     console.log(` ${p2Card.rank} of ${p2Card.suit} is greater than ${p1Card.rank} of ${p1Card.suit}, Player Two wins the War!`);
    //     this.playerOne.unshift(this.warPile)
    //   }
    
    // }
  
  // else if (p1Card.score == p2Card.score && this.playerOne > 4 && this.playerTwo > 4) {

  

// console.log(game)
// console.log(game.playerOne[0])




//GAME

// players compare spot (0) of the array (make an if/else of playerOne[0] < , > , == )
  // "cardOne is <,> than CardTwo playerOne/Two wins the round"
    // both players SHIFT() the top card, then winner PUSH(x ,y) both cards

    //IN CASE OF WAR

    // both players SLICE(1-3) top 3 cards into warPile
    // compare top of decklist, 
    //create a console log of who wins war
    // winner PUSH(WarStack) to their list
    // both players SHIFT() the top card, then winner PUSH(x ,y) both cards