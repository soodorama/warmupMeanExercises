
// Create a Card class. A card should have the following functionality:

// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)

class Card {
    constructor(suit, val, num) {
        this.suit = suit
        this.val = val
        this.num = num
    }
    show() {
        console.log("Suit: " + this.suit + ", Val: " + this.val + ", Num: " + this.num)
    }
}

// Create a Deck class. A deck should have the following functionality:

// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck

class Deck {
    constructor() {
        this.deck = []
        const suits = ["Hearts","Clubs","Diamonds","Spades"]
        const vals = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < vals.length; j++) {
                let card = new Card(suits[i], vals[j], j+1)
                this.deck.push(card)
            }
        }
    }
    shuffle() {
        for (var i = 0; i < 30; i++) {
            let first = Math.floor(Math.random() * 52)
            let second = Math.floor(Math.random() * 52)
            let temp  = this.deck[first]
            this.deck[first] = this.deck[second]
            this.deck[second] = temp
        }
    }
    reset() {
        const suits = ["Hearts","Clubs","Diamonds","Spades"]
        const vals = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < vals.length; j++) {
                let card = new Card(suits[i], vals[j], j)
                this.deck.push(card)
            }
        }
    }
    deal() {
        let index = Math.floor(Math.random() * 52)
        let card = this.deck[index]
        this.deck[index] = this.deck[deck.length-1]
        this.deck.pop()
        return card
    }
}

// Now create a Player class. A Player should have the following functionality:

// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
        for (var i = 0; i < 5; i++) {
            this.hand.push(deck.deal())
        }
    }
    take() {
        this.hand.push(deck.deal())
    }
    discard(pos) {
        this.hand[pos] = this.hand[this.hand.length - 1]
        this.hand.pop()
    }
}