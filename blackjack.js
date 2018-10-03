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

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
        for (var i = 0; i < 2; i++) {
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

$(doucment).ready(function() {
    var deck = new Deck()
    deck.shuffle()
    var dealer = new Player("Dealer")
    var player = new Player("Quang")
    
})