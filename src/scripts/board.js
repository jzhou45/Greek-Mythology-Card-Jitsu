import Hand from "./hand.js"

function Board(hand){
    this.hand = hand;
    this.board = null;
}

Board.prototype.play = function(){
    const playedCard = this.hand.playCard();
    this.board = playedCard;
}

export default Board;