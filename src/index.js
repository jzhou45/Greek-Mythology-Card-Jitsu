import Card from './scripts/card.js';
import Deck from "./scripts/deck.js";
import Hand from "./scripts/hand.js";
import Game from "./scripts/game.js";
import Board from "./scripts/board.js"

document.addEventListener('DOMContentLoaded', () => {

    var game = new Game();

    function setLeft(card){
        const arr = [];
        const cardId = document.getElementById(card);
        arr.push(cardId);
        const offset = cardId.getBoundingClientRect();
        arr.push(offset.left);
        return arr;
    }

    let card1Arr = setLeft("card1");
    let card2Arr = setLeft("card2");
    let card3Arr = setLeft("card3");
    let card4Arr = setLeft("card4");
    let card5Arr = setLeft("card5");


    function setCardPositions(cardArr){
        let card = cardArr[0];
        let left = cardArr[1];
        card.style.position = "fixed";
        card.style.left = left;
    }

    setCardPositions(card1Arr);
    setCardPositions(card2Arr);
    setCardPositions(card3Arr);
    setCardPositions(card4Arr);
    setCardPositions(card5Arr);

    function setBoardPositions(cardArr1, cardArr2, board){
        board.style.left = (cardArr1 + cardArr2) / 2
    }

    const playerBoard = document.getElementById("player-board");
    setBoardPositions(card1Arr[1], card2Arr[1], playerBoard);

    const playerBoardCard = document.getElementById("player-board-card");
    setBoardPositions(card1Arr[1], card2Arr[1], playerBoardCard);

    const aiBoard = document.getElementById("ai-board");
    setBoardPositions(card4Arr[1], card5Arr[1], aiBoard);

    const aiBoardCard = document.getElementById("ai-board-card");
    setBoardPositions(card4Arr[1], card5Arr[1], aiBoardCard);

    function addEventListenerToCard(cardArr){
        const card = cardArr[0];
        card.addEventListener("mouseover", hover, false);
        card.addEventListener("mouseout", unhover, false);
        card.addEventListener("click", playCard);
    }

    addEventListenerToCard(card1Arr);
    addEventListenerToCard(card2Arr);
    addEventListenerToCard(card3Arr);
    addEventListenerToCard(card4Arr);
    addEventListenerToCard(card5Arr);

    function hover(){
        this.style.overflow = "visible";
        this.style.bottom = "15vh";
        displayCardName(this);
    }

    function unhover(){
        this.style.overflow = "hidden";
        this.style.bottom = "10vh";
        undisplayCardName(this);
    }

    function setNamesLeft(cardName, cardsArr){
        const name = document.getElementById(cardName);
        name.style.left = cardsArr[1];
    }

    setNamesLeft("card1-name", card1Arr);
    setNamesLeft("card2-name", card2Arr);
    setNamesLeft("card3-name", card3Arr);
    setNamesLeft("card4-name", card4Arr);
    setNamesLeft("card5-name", card5Arr);

    function displayCardName(element){
        const cardId = element.id;
        const cardIdString = String(cardId)
        const card = game.hand.whichCard(cardIdString);
        const cardIdName = document.getElementById(`${cardIdString}-name`);
        cardIdName.children[0].innerHTML = card.name;
    }

    function undisplayCardName(element){
        const cardIdString = String(element.id);
        document.getElementById(`${cardIdString}-name`).children[0].innerHTML = "";
    }

    function playCard(){
        this.style.display = "none";
        let index;
        if (this.id === "card1"){
            index = 0;
        } else if (this.id === "card2"){
            index = 1;
        } else if (this.id === "card3"){
            index = 2;
        } else if (this.id === "card4"){
            index = 3;
        } else{
            index = 4;
        }
        if (game.board.board === null){
            game.moveFromHandToBoard(index);
        }
        this.style.display = "flex";
    }

    game.start();

});