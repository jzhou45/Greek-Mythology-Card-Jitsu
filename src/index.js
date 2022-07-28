import Card from './scripts/card.js';
import Deck from "./scripts/deck.js";
import Hand from "./scripts/hand.js";
import Game from "./scripts/game.js";
import Board from "./scripts/board.js";

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

    let gamediv = document.getElementById("game")
    gamediv.style.visibility = "hidden";

    let titlescreen = document.getElementById("title-div");
    titlescreen.addEventListener("mouseover", enlarge, false);
    titlescreen.addEventListener("mouseout", unenlarge, false);

    function enlarge(){
        const olympus = this.children[0]
        const cardJitsu = this.children[1]
        olympus.style.fontSize = "32vh";
        olympus.style.color = "#c6934b";
        olympus.style.textShadow = "#703529 1vw 1vh";
        olympus.style.cursor = "pointer";
        cardJitsu.style.fontSize = "32vh";
        cardJitsu.style.color = "#c6934b"
        cardJitsu.style.textShadow = "#703529 1vw 1vh";
        cardJitsu.style.cursor = "pointer";
    }
    
    function unenlarge(){
        const olympus = this.children[0]
        const cardJitus = this.children[1]
        olympus.style.fontSize = "30vh";
        olympus.style.color = "#283d70";
        olympus.style.textShadow = "#2e3546 1vw 1vh";
        cardJitus.style.fontSize = "30vh";
        cardJitus.style.color = "#283d70"
        cardJitus.style.textShadow = "#2e3546 1vw 1vh";
    }

    titlescreen.addEventListener("click", goToInstructions);
    
    const instructions = document.getElementById("instructions-block");

    const next = document.getElementById("next");
    next.addEventListener("click", startGame);
    next.addEventListener("mouseover", nextHover);
    next.addEventListener("mouseout", nextUnhover);

    const gong = document.querySelector("#gong");
    gong.volume = 0.8;

    const battleMusic = document.querySelector("#battle-song");
    
    const volumeAndInstructions = document.getElementById("volume-and-instructions");
    const volume = document.querySelector("#volume");
    volume.addEventListener("click", playOrPause);

    // volumeAndInstructions.style.display = "none";

    const instructionsIcon = document.getElementById("instructions-in-game");
    const inGameInstructions = document.getElementById("center-instructions");
    inGameInstructions.style.display = "none";

    let instructionsDisplayed = false;
    instructionsIcon.addEventListener("click", displayInstructions);


    function displayInstructions(){
        if (instructionsDisplayed){
            instructionsDisplayed = false;
            inGameInstructions.style.display = "none";
            instructionsIcon.children[0].outerHTML = "<i class='fa-solid fa-info fa-2xl'></i>"
        }else{
            instructionsDisplayed = true;
            inGameInstructions.style.display = "flex"
            instructionsIcon.children[0].outerHTML = "<i class='fa-solid fa-x fa-2xl'></i>"
        }
    }


    let musicIsPlaying = true;

    function playOrPause(){
        if (musicIsPlaying){
            musicIsPlaying = false;
            battleMusic.pause();
            battleMusic.currentTime = 0;
            volume.children[0].outerHTML = "<i class='fa-solid fa-volume-xmark fa-2xl'></i>";
        } else{
            musicIsPlaying = true;
            battleMusic.play();
            volume.children[0].outerHTML = "<i class='fa-solid fa-volume-high fa-2xl'></i>";
        }
    }

    instructions.style.display = "none";

    function startGame(){
        instructions.style.display = "none";
        document.body.style.background = "url('src/assets/athena_temple.jpeg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        gamediv.style.visibility = "visible";
        game.start();  
        volumeAndInstructions.style.display = "flex";
        battleMusic.play();
    }
    
    function goToInstructions(){
        titlescreen.style.display = "none";
        instructions.style.display = "flex";
        gong.play();
    }

    function nextHover(){
        this.style.color = "#c6934b";
        this.style.cursor = "pointer";
    }

    function nextUnhover(){
        this.style.color = "black";
    }

});