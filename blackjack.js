class Card {
    constructor(suit, val, num) {
        this.suit = suit
        this.val = val
        this.num = num
    }
    show() {
        console.log("Suit: " + this.suit + ", Val: " + this.val + ", Num: " + this.num)
        return this.val + this.suit 
    }
}

class Deck {
    constructor() {
        this.deck = []
        const suits = ["&#x2661;","&#x2663;","&#x2662;","&#x2660;"]
        const vals = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < vals.length; j++) {
                let card = new Card(suits[i], vals[j], j+1)
                this.deck.push(card)
            }
        }
    }
    shuffle() {
        for (var i = 0; i < 50; i++) {
            let first = Math.floor(Math.random() * 52)
            let second = Math.floor(Math.random() * 52)
            let temp  = this.deck[first]
            this.deck[first] = this.deck[second]
            this.deck[second] = temp
        }
    }
    reset() {
        const suits = ["&#x2661;","&#x2663;","&#x2662;","&#x2660;"]
        const vals = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"]
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < vals.length; j++) {
                var card = new Card(suits[i], vals[j], j+1)
                this.deck.push(card)
            }
        }
    }
    deal() {
        return this.deck.pop()
    }
    show() {
        for (var i = 0; i < this.deck.length; i++) {
            this.deck[i].show()
        }
    }
}

class Player {
    constructor(name, deck) {
        this.name = name
        this.hand = []
        this.hand.push(deck.deal())
        this.hand.push(deck.deal())
    }
    take(deck) {
        this.hand.push(deck.deal())
    }
    discard(pos) {
        this.hand[pos] = this.hand[this.hand.length - 1]
        this.hand.pop()
    }
}

$(document).ready(function() {
    var deck = new Deck()
    deck.shuffle()
    var dealer = new Player("Dealer", deck)
    var player = new Player("Quang", deck)

    $("div#dealer").append("<div class='card'><p>"+dealer.hand[0].val + " " + dealer.hand[0].suit +"</p></div>")
    $("div#dealer").append("<div class='card'><p>"+dealer.hand[1].val + " " + dealer.hand[1].suit +"</p></div>")

    $("div#player").append("<div class='card'><p>"+player.hand[0].val + " " + player.hand[0].suit +"</p></div>")
    $("div#player").append("<div class='card'><p>"+player.hand[1].val + " " + player.hand[1].suit +"</p></div>")

    var str = "<div id='all_cards'>"
    for (let i = 0; i < deck.deck.length; i++) {
        str += deck.deck[i].show()
    }
    str += "</div>"
    $("div#deck").append(str)

    $("#hit").click(function() {
        console.log("hit me baby one more time")
        player.take(deck)
        var i = player.hand.length - 1
        $("div#player").append("<div class='card'><p>"+player.hand[i].val + " " + player.hand[i].suit +"</p></div>")
        
        var str = "<div>"
        for (let i = 0; i < deck.deck.length; i++) {
            str += deck.deck[i].show()
        }
        str += "</div>"
        $("div#all_cards").html(str)
    
    })
    
    
})