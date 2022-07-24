import Hand from "./hand.js";
import Board from "./board.js";

function Game(){
    this.hand = new Hand();
    this.board = new Board();
    this.countdown();
}

Game.prototype.moveFromHandToBoard = function(index){
    const card = this.hand.playCard(index);
    this.board.play(card);
    this.board.moveCardToBoard();
    this.hand.draw();
}

Game.prototype.start = function(){
}

Game.prototype.round = function(){

}

Game.prototype.countdown = function(){
    let sec = 20;
    let timer = setInterval( function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (sec < 0) clearInterval(timer);
    }, 1000);
}

export default Game;