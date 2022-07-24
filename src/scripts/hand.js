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
    for (let i = 0; i < this.hand.length; i++){
        if (i === null) return i;
    }
}

Hand.prototype.playCard = function(index){
    const playedCard = this.hand[index];
    this.hand[index] = null;
    return playedCard;
}

Hand.prototype.whichCard = function(element){
    if (element === "card1"){
        return this.hand[0];
    } else if (element === "card2"){
        return this.hand[1];
    } else if (element === "card3"){
        return this.hand[2];
    } else if (element === "card4"){
        return this.hand[3];
    } else{
        return this.hand[4];
    }
}

export default Hand;