import Deck from "./deck.js"

function AI(){
    this.deck = new Deck();
    this.board = null;
}

AI.prototype.play = function(){
    this.board = this.deck.draw();
    this.moveCardToBoard();
}

AI.prototype.clear = function(){
    this.board = null;
}

AI.prototype.moveCardToBoard = function(){
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
    }

    powerValue.innerHTML = this.board.value;
}

export default AI;