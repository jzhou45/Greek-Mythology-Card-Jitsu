import Hand from "./hand.js"

function Board(hand){
    this.hand = hand;
    this.board = null;
}

Board.prototype.play = function(index){
    const playedCard = this.hand.playCard(index);
    this.board = playedCard;
    this.moveCardToBoard();
}

Board.prototype.moveCardToBoard = function(){
    let board = document.getElementById("player-board");

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

export default Board;