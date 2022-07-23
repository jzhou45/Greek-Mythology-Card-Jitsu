import Card from './scripts/card.js';
import Deck from "./scripts/deck.js";
import Hand from "./scripts/hand.js";
import Game from "./scripts/game.js";

document.addEventListener('DOMContentLoaded', () => {
    let zeus = new Card("Zeus", "god", "10", "#FDFD96", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8932fa02-b339-4e8c-99d6-115e7cd29415/d1qn6k2-29220961-dc57-459b-ad1a-4015d7e6067b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5MzJmYTAyLWIzMzktNGU4Yy05OWQ2LTExNWU3Y2QyOTQxNVwvZDFxbjZrMi0yOTIyMDk2MS1kYzU3LTQ1OWItYWQxYS00MDE1ZDdlNjA2N2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Q5fKUiaddvfZlaLo42gTYWA0YbXxB-UahlYmE3xwSLI");
    let hera = new Card("Hera", "god", "1", "#F8C8DC", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73fd5feb-8a2e-46e3-8ab9-c764280fb325/d94v10j-7630529f-92fa-4db5-be45-4b1666e7072a.jpg/v1/crop/w_167,h_250,x_0,y_0,scl_0.4175,q_70,strp/hera_by_ninjart1st_d94v10j-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvNzNmZDVmZWItOGEyZS00NmUzLThhYjktYzc2NDI4MGZiMzI1XC9kOTR2MTBqLTc2MzA1MjlmLTkyZmEtNGRiNS1iZTQ1LTRiMTY2NmU3MDcyYS5qcGciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zRy2xWQLZ4e8ahj-vXwgp5yPj7o8YKGberRXYpBKKEw");
    let dionysus = new Card("Dionysus", "god", "2", "#C3B1E1", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b65a42f8-65e1-488a-b310-5a5137f199f3/d5cgbr8-1e89258e-2661-4c56-bba3-0842e271a463.jpg/v1/fill/w_400,h_553,q_75,strp/dionysus_by_reapersun_d5cgbr8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2NWE0MmY4LTY1ZTEtNDg4YS1iMzEwLTVhNTEzN2YxOTlmM1wvZDVjZ2JyOC0xZTg5MjU4ZS0yNjYxLTRjNTYtYmJhMy0wODQyZTI3MWE0NjMuanBnIiwiaGVpZ2h0IjoiPD01NTMiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2I2NWE0MmY4LTY1ZTEtNDg4YS1iMzEwLTVhNTEzN2YxOTlmM1wvcmVhcGVyc3VuLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.eEm06H8MgeotM1_KJOo6xETrikoR7dmEsFyetBS20Rg");
    let theseus = new Card("Theseus", "hero", "7", "#A7C7E7", "https://www.greek-gods.info/greek-heroes/theseus/images/theseus-painting-gallery.jpg");
    let medusa = new Card("Medusa", "monster", "9", "#A7C7E7", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/241f2636-882f-4357-9e99-b9a3cbcfa999/ddkv05n-6105a9aa-faa6-47cc-8ab9-33a7e79ff5df.jpg/v1/fill/w_1024,h_1353,q_75,strp/medusa_by_z__ed_ddkv05n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MyIsInBhdGgiOiJcL2ZcLzI0MWYyNjM2LTg4MmYtNDM1Ny05ZTk5LWI5YTNjYmNmYTk5OVwvZGRrdjA1bi02MTA1YTlhYS1mYWE2LTQ3Y2MtOGFiOS0zM2E3ZTc5ZmY1ZGYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PpPED2cXuDG_OHzYB2UBnFA0-HZ7NNHMV6FP4D_SQ5U");
    
    var starterDeck = new Deck(zeus, hera, dionysus, theseus, medusa);

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
    }

    function unhover(){
        this.style.overflow = "hidden";
        this.style.bottom = "10vh";
    }

    function playCard(){
        this.style.display = "none";
        console.log(this)
    }
});