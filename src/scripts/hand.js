import Deck from "./deck.js";

class Hand{
    constructor(){
        this.hand = [null, null, null, null, null];
        this.deck = new Deck();
        this.initialDraw();
    };

    initialDraw(){
        for (let i = 0; i < 5; i++){
            this.hand[i] = this.draw();
        };
        return this.hand;
    };

    showDraw(index){
        let card = {card: this.hand[index], id: `card${index + 1}`}
        this.setCardValues(card);
    };

    setCardValues(cardObj){
        let backgroundColor = document.getElementById(cardObj.id);
        let upperCorner = backgroundColor.children[0];
        let img = backgroundColor.children[1];
        let icon = upperCorner.children[0];
        let powerValue = upperCorner.children[1];
    
        backgroundColor.style.backgroundColor = cardObj.card.color;
        upperCorner.style.backgroundColor = cardObj.card.color;
        img.src = cardObj.card.img;
        if (cardObj.card.type === "god"){
            icon.src = "src/assets/god.png";
        } else if (cardObj.card.type === "monster"){
            icon.src = "src/assets/monster.png";
        } else{
            icon.src = "src/assets/hero.png"
        };
    
        powerValue.innerHTML = cardObj.card.value;
    };

    draw(){
        const newCard = this.deck.draw();
        const index = this.findMissingCardIndex();
        this.hand[index] = newCard;
        this.showDraw(index);
        return newCard;
    };

    playCard(index){
        const playedCard = this.hand[index];
        this.hand[index] = null;
        return playedCard;
    };

    isMissingCard(){
        for (let i of this.hand){
            if (i === null) return false;
        };
        return true;
    };

    findMissingCardIndex(){
        for (let i = 0; i < this.hand.length; i++){
            if (this.hand[i] === null) return i;
        };
    };

    whichCard(element){
        return this.hand[parseInt(element[-1]) - 1]
    };
};

export default Hand;