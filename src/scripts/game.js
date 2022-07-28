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
}

Game.prototype.start = function(){
    let game = this;
    game.countdown()
    let round = setInterval( function(){
        if ((!game.playerTally.win() && !game.aiTally.win()) && timer.innerHTML === "0") {
            setTimeout(function(){
                game.board.clear();
                game.ai.clear();
                game.hand.draw();
                document.getElementById("card1").style.display = "flex";
                game.countdown();
            }, 2000);
        } else if (game.playerTally.win() || game.aiTally.win()){
            clearInterval(round);
            document.getElementById("endscreen").style.display = "flex";
        }
    }, 3500);
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
            document.getElementById("card1").style.display = "none";
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
    if (this.winByType(playerCard, aiCard) === "tie") return;
    if (this.winByType(playerCard, aiCard)){
        this.playerTally.points.push(playerCard);
        this.playerTally.append();
        this.visualizePoints("player", playerCard);
    }else {
        this.aiTally.points.push(aiCard);
        this.aiTally.append();
        this.visualizePoints("ai", aiCard);
    }
    return;
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
    if (parseInt(playerCard.value) > parseInt(aiCard.value)){
        return true;
    } else if (parseInt(playerCard.value < parseInt(aiCard.value))){
        return false;
    }
    else{
        return "tie";
    }
}

Game.prototype.visualizePoints = function(who, card){
    if (who === "player"){
        if (card.type === "god"){
            let godPoints = document.getElementById("player-god");
            let div = document.createElement('div');
            div.classList.add("tally");
            div.style.background = card.color;
            let img = document.createElement('img');
            img.src = "src/assets/god.png";
            div.appendChild(img);
            godPoints.appendChild(div);
            return;
        } else if (card.type === "monster"){
            let monsterPoints = document.getElementById("player-monster");
            let div = document.createElement('div');
            div.classList.add("tally");
            div.style.background = card.color;
            let img = document.createElement('img');
            img.src = "src/assets/monster.png";
            div.appendChild(img);
            monsterPoints.appendChild(div);
            return;
        } else{
            let heroPoints = document.getElementById("player-hero");
            let div = document.createElement('div');
            div.classList.add("tally");
            div.style.background = card.color;
            let img = document.createElement('img');
            img.src = "src/assets/hero.png";
            div.appendChild(img);
            heroPoints.appendChild(div);
            return;
        }
    } else{
        if (card.type === "god"){
            let godPoints = document.getElementById("ai-god");
            let div = document.createElement('div');
            div.classList.add("tally");
            div.style.background = card.color;
            let img = document.createElement('img');
            img.src = "src/assets/god.png";
            div.appendChild(img);
            godPoints.appendChild(div);
            return;
        } else if (card.type === "monster"){
            let monsterPoints = document.getElementById("ai-monster");
            let div = document.createElement('div');
            div.classList.add("tally");
            div.style.background = card.color;
            let img = document.createElement('img');
            img.src = "src/assets/monster.png";
            div.appendChild(img);
            monsterPoints.appendChild(div);
            return;
        } else{
            let heroPoints = document.getElementById("ai-hero");
            let div = document.createElement('div');
            div.classList.add("tally");
            div.style.background = card.color;
            let img = document.createElement('img');
            img.src = "src/assets/hero.png";
            div.appendChild(img);
            heroPoints.appendChild(div);
            return;
        }
    }
}


export default Game;