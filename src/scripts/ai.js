import Deck from "./deck.js"

class AI{
    constructor(){
        this.deck = new Deck();
        this.board = null;
    };

    play(){
        this.board = this.deck.draw();
        this.moveCardToBoard();
    };

    clear(){
        this.board = null;
        this.undisplayCardName("ai-board-name");
        const board = document.getElementById("ai-board");
        board.style.display = "none";
    };

    moveCardToBoard(){
        let board = document.getElementById("ai-board")
        let upperCorner = board.children[0];
        let img = board.children[1];
        let icon = upperCorner.children[0];
        let powerValue = upperCorner.children[1];
    
        board.style.display = "flex";
        board.style.backgroundColor = this.board.color;
        upperCorner.style.backgroundColor = this.board.color;
        img.src = this.board.img;
        if (this.board.type === "god"){
            icon.src = "src/assets/god.png";
        } else if (this.board.type === "monster"){
            icon.src = "src/assets/monster.png";
        } else{
            icon.src = "src/assets/hero.png"
        };
    
        powerValue.innerHTML = this.board.value;
        this.displayCardName("ai-board-name");
    };

    displayCardName(divElement){
        const div = document.getElementById(divElement);
        div.children[0].innerHTML = this.board.name;
    };

    undisplayCardName(divElement){
        const div = document.getElementById(divElement);
        div.children[0].innerHTML = "";
    };
};

export default AI;