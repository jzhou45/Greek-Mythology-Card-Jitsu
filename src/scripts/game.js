import Hand from "./hand.js";
import Board from "./board.js";
import AI from "./ai.js";
import Tally from "./tally.js";

function Game(){
    this.hand = new Hand();
    this.board = new Board();
    this.ai = new AI();
    this.playerTally = new Tally("user");
    this.aiTally = new Tally("ai");
}

Game.prototype.moveFromHandToBoard = function(index){
    const card = this.hand.playCard(index);
    this.board.play(card);
    this.board.moveCardToBoard();
    this.hand.draw();
}

Game.prototype.start = function(){
    let game = this;
    game.countdown()
    let round = setInterval( function(){
        // debugger;
        if ((!game.playerTally.win() && !game.aiTally.win()) && timer.innerHTML === "0") {
            game.countdown();
        } else if (game.playerTally.win() || game.aiTally.win()){
            clearInterval(round);
            alert("game ended");
        }
    }, 3000);
}

Game.prototype.countdown = function(){
    this.board.board = null;
    this.ai.board = null;
    let sec = 20;
    let game = this;
    let timer = setInterval( function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (game.board.board){
            clearInterval(timer);
            game.ai.play();
            game.winRound();
            document.getElementById('timer').innerHTML="0";
            return;
        }
        if (sec < 0){
            clearInterval(timer);
            game.moveFromHandToBoard(0);
            game.ai.play();
            game.winRound();
            document.getElementById('timer').innerHTML="0";
            return;
        };
    }, 1000);
}

Game.prototype.winRound = function(){
    const playerCard = this.board.board;
    const aiCard = this.ai.board;
    if (this.winByType(playerCard, aiCard)){
        this.playerTally.points.push(playerCard);
    }else {
        this.aiTally.points.push(aiCard);
    }
    this.visualizePoints();
}

Game.prototype.winByType = function(playerCard, aiCard){
    if (playerCard.type === aiCard.type){
        return this.winByNumber(playerCard, aiCard);
    } else if(playerCard.type === "monster" && aiCard.type === "god"){
        return true;
    } else if (playerCard.type === "god" && aiCard.type === "hero"){
        return true;
    } else if (playerCard.type === "hero" && aiCard.type === "monster"){
        return true;
    } else{
        return false;
    }
}

Game.prototype.winByNumber = function(playerCard, aiCard){
    if (parseInt(playerCard.value) > parseInt(aiCard.value)) return true;
    return false;
}

Game.prototype.visualizePoints = function(){
    const playerPoints = document.getElementById("player-points");
    const aiPoints = document.getElementById("ai-points");
    playerPoints.innerHTML = JSON.stringify(displayPlease(this.playerTally.points));
    aiPoints.innerHTML = JSON.stringify(displayPlease(this.aiTally.points));
}

function displayPlease(pointsArray){
    let retVal = [];
    for (let i of pointsArray){
        retVal.push([i.type, i.color]);
    }
    return retVal;
}

export default Game;