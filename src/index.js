import Card from './scripts/card.js';
import Deck from "./scripts/deck.js";

document.addEventListener('DOMContentLoaded', () => {
    var card1 = document.getElementById("card1")
    var offset1 = card1.getBoundingClientRect();
    var card1Left = offset1.left;

    var card2 = document.getElementById("card2")
    var offset2 = card2.getBoundingClientRect();
    var card2Left = offset2.left;

    var card3 = document.getElementById("card3")
    var offset3 = card3.getBoundingClientRect();
    var card3Left = offset3.left;

    var card4 = document.getElementById("card4")
    var offset4 = card4.getBoundingClientRect();
    var card4Left = offset4.left;

    var card5 = document.getElementById("card5")
    var offset5 = card5.getBoundingClientRect();
    var card5Left = offset5.left;

    function setCardPositions(card, left){
        card.style.position = "fixed";
        card.style.left = left;
    }

    setCardPositions(card1, card1Left);
    setCardPositions(card2, card2Left);
    setCardPositions(card3, card3Left);
    setCardPositions(card4, card4Left);
    setCardPositions(card5, card5Left);

    card1.addEventListener("mouseover", hover, false);
    card1.addEventListener("mouseout", unhover, false);

    card2.addEventListener("mouseover", hover, false);
    card2.addEventListener("mouseout", unhover, false);

    card3.addEventListener("mouseover", hover, false);
    card3.addEventListener("mouseout", unhover, false);

    card4.addEventListener("mouseover", hover, false);
    card4.addEventListener("mouseout", unhover, false);

    card5.addEventListener("mouseover", hover, false);
    card5.addEventListener("mouseout", unhover, false);

    function hover(){
        this.style.overflow = "visible";
        this.style.bottom = "15vh";
    }

    function unhover(){
        this.style.overflow = "hidden";
        this.style.bottom = "10vh";
    }
});