import Card from "./card.js"

function Deck(...cards){
    this.cards = cards;
}

Deck.prototype.shuffle = function(){
    for (let i = 0; i < this.cards.length; i++){
        const randomIndex = i + Math.floor(Math.random() * this.cards.length % (this.cards.length - i));
        [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
 }
    return this.cards;
}

Deck.prototype.draw = function(){
    return this.cards.pop();
}

Deck.prototype.isEmpty = function(){
    if (this.cards.length === 0) return true;
    return false;
}

Deck.prototype.remainingCards = function(){
    return this.cards.length;
}


export default Deck;
// add refresh function in case deck runs out and the game hasn't ended