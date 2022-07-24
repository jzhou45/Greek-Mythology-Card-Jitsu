import Card from './scripts/card.js';
import Deck from "./scripts/deck.js";
import Hand from "./scripts/hand.js";
import Game from "./scripts/game.js";
import Board from "./scripts/board.js"

document.addEventListener('DOMContentLoaded', () => {
    const poseidon = new Card("Poseidon", "god", "9", "#A7C7E7", "/src/assests/poseidon.png");
    const triton = new Card("Triton", "god", "5", "#A7C7E7", "/src/assests/triton.png");
    const proteus = new Card("Proteus", "god", "1", "#A7C7E7", "src/assests/proteus.jpeg");
    const orion = new Card("Orion", "hero", "3", "#A7C7E7", "/src/assests/orion.jpeg");
    const theseus = new Card("Theseus", "hero", "7", "#A7C7E7", "/src/assests/theseus.webp");
    const bellerophon = new Card("Bellerophon", "hero", "2", "#A7C7E7", "/src/assests/bellerophon.jpeg");
    const minotaur = new Card("Minotaur", "monster", "9", "#A7C7E7", "/src/assests/minotaur.png");
    const pegasus = new Card("Pegasus", "monster", "10", "#A7C7E7", "/src/assests/pegasus.png");
    const arion = new Card("Arion", "monster", "1", "#A7C7E7", "/src/assests/arion.jpeg");
    
    const zeus = new Card("Zeus", "god", "10", "#FDFD96", "/src/assests/zeus.jpeg");
    const athena = new Card("Athena", "god", "7", "#FDFD96", "/src/assests/athena.jpeg")
    const aphrodite = new Card("Aphrodite", "god", "6", "#FDFD96", "/src/assests/aphrodite.webp");
    const heracles = new Card("Heracles", "hero", "10", "#FDFD96", "/src/assests/heracles.webp");
    const achilles = new Card("Achilles", "hero", "9", "#FDFD96", "/src/assests/achilles.jpeg");
    const helen = new Card("Helen", "hero", "6", "#FDFD96", "/src/assests/helen.webp");
    const medusa = new Card("Medusa", "monster", "8", "#FDFD96", "/src/assests/medusa.jpeg");
    const hydra = new Card("Hydra", "monster", "7", "#FDFD96", "/src/assests/hydra.webp");
    const chiron = new Card("Chiron", "monster", "5", "#FDFD96", "/src/assests/chiron.webp")

    var starterDeck = new Deck(
        poseidon, orion, theseus, bellerophon, triton, proteus, minotaur, pegasus, arion,
        zeus, athena, aphrodite, heracles, achilles, helen, medusa, hydra, chiron);

    var game = new Game(starterDeck);
    game.start();

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

    function setBoardPositions(board){
        board.style.left = (card1Arr[1] + card2Arr[1]) / 2
    }

    const playerBoard = document.getElementById("player-board");
    setBoardPositions(playerBoard);

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
        const card = game.handClass.whichCard(cardIdString);
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
        game.board.play(index);
    }
});