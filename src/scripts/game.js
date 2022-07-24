import Hand from "./hand.js";
import Board from "./board.js";

function Game(){
    this.hand = new Hand();
    this.board = new Board();
}

Game.prototype.moveFromHandToBoard = function(index){
    const card = this.hand.playCard(index);
    this.board.play(card);
    this.board.moveCardToBoard();
    this.hand.draw();
}

Game.prototype.start = function(){
}

export default Game;