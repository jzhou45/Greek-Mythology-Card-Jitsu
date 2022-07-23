import Deck from "./deck.js";
import Hand from "./hand.js";

function Game(deck){
    this.hand = new Hand(deck);
    this.deck = this.hand.deck;
}

Game.prototype.start = function(){
    this.deck.shuffle();
    this.hand.draw()
}

Game.prototype.initialDraw = function(){
    let card1 = this.hand[0];
    let card2 = this.hand[1];
    let card3 = this.hand[2];
    let card4 = this.hand[3];
    let card5 = this.hand[4];

    console.log(card1.children);
}

export default Game;