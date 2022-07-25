import Hand from "./hand.js";
import Board from "./board.js";
import AI from "./ai.js"

function Game(){
    this.hand = new Hand();
    this.board = new Board();
    this.ai = new AI();
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

Game.prototype.countdown = function(){
    let sec = 20;
    let game = this;
    let timer = setInterval( function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (game.board.board){
            clearInterval(timer);
            game.ai.play();
        }
        if (sec < 0){
        clearInterval(timer);
        game.moveFromHandToBoard(0);
        game.ai.play();
        };
    }, 1000);
}

export default Game;