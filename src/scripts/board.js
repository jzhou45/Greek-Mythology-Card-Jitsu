function Board(){
    this.board = null;
}

Board.prototype.play = function(card){
    this.board = card
}

Board.prototype.clear = function (){
    this.board = null;
    this.undisplayCardName("player-board-name");
    const board = document.getElementById("player-board");
    board.style.display = "none";
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
    this.displayCardName("player-board-name");
}

Board.prototype.displayCardName = function(divElement){
    const div = document.getElementById(divElement);
    div.children[0].innerHTML = this.board.name;
}

Board.prototype.undisplayCardName = function(divElement){
    const div = document.getElementById(divElement);
    div.children[0].innerHTML = "";
}

export default Board;