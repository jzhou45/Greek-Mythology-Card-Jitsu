// import Deck from "./deck";

function Hand(deck){
    this.hand = [null, null, null, null, null];
    this.deck = deck;
}

Hand.prototype.initialDraw = function(){
    for (let i = 0; i < 5; i++){
        this.hand[i] = this.deck.draw();
    }
    return this.hand;
}

Hand.prototype.draw = function(){
    const newCard = this.deck.draw();
    this.hand[this.findMissingCardIndex()] = newCard;
    return newCard;
}

Hand.prototype.isMissingCard = function(){
    for (let i of this.hand){
        if (i === null) return false;
    }
    return true;
}

Hand.prototype.findMissingCardIndex = function(){
    for (let i of this.hand){
        if (i === null) return i;
    }
}

export default Hand;