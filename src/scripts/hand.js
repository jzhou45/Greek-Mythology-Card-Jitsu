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
    }

    showDraw(index){
        let card;
        if (index === 0){
            card = {card: this.hand[0], id: "card1"};
        } else if (index === 1){
            card = {card: this.hand[1], id: "card2"};
        } else if (index === 2){
            card = {card: this.hand[2], id: "card3"};
        } else if (index === 3){
            card = {card: this.hand[3], id: "card4"};
        } else {
            card = {card: this.hand[4], id: "card5"};
        };
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
        this.showDraw(index)
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
        };
    };
};

export default Hand;