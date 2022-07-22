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
