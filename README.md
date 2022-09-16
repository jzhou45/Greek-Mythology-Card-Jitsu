# Olympus Card-Jitsu

## Olympus Card-Jitsu
[Olympus Card-Jitsu](https://jzhou45.github.io/Olympus-Card-Jitsu/) combines an agglomeration of favorite things from my childhood, including Club Penguin, ninjas (which inspired the original Card-Jitsu), and Greek myths and the Percy Jackson series.

Olympus Card-Jitsu aims to make a faithful adapatation to the core Card-Jitsu gameplay with new classes and cards based on Greek mythology and lore. In order to keep the game a client-side project, the opponenet will be a simple A.I., rather than an opposing player.

## Background

### Club Penguin Card-Jitsu
Card-Jitsu is a mini-game that was first introduced in the formerly popular MMORPG, Club Penguin, in November of 2008, with the introduction of ninjas and the Dojo to servers. The card game follows a simple gameplay premise, where players would have decks with cards of three different types, that follow the classic Rock-Paper-Scissors structure, where 1 type would beat another, but lose to the other. The cards would also contain a number value and color associated with it for additional gameplay mechanics, along with cards with special effect that changes the rules of the round it's played in.

Each round of Card-Jitsu, would require each player to play 1 card at the same time. The player with the strong type would win the round, e.g. Water beats Fire in Card-Jitsu or Rock beats Scissors in Rock-Paper-Scissors. If both cards are of the same element, the card with the higher number value would win, otherwise the round will end in a tie.

After each round ends, the player would collect a token with the type and color of the card they won with. In order to win the game, a player would need to collect 3 tokens are different types or 3 tokens of the same type with different colors.

## Wireframe
![alt text](./wireframe.png)
The wireframe above displays the framework of the core game screen where:
  * Users are able to view their hand and remaining time on the bottom of the screen.
  * When time runs or when user and A.I. has chosen their cards, they will both display on the board, represented by user sprites in the above wireframe.
  * The top left represents all the cards the user has won with in the form of tokens or sprites, whereas the top right represents the A.I.'s.
  * The top center section contains buttons to open a modal of information along with sound settings.


## Functionality & MVPs
In Olympus Card-Jitsu, users will be able to:
  * Interact with different aspects and element on the page for animations.
  * Start games with a shuffled deck.
  * Hover over cards for more information.
  * Play cards onto the board.
  * Have cards be played for them, if timer runs out or player is away from keyboard.
  * Restart game.

![alt text](./ocj_gameplay.gif)

```js
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
```


In addition, this project includes:
  * Instructions and in-game modals for instructions if player forgets.
  * Music and sound effects.
  

## Technologies, Libraries, APIs
This project will is implemented with the following technologies:
  * Game functions and user interactions are handled with Vanilla JavaScript through DOM Manipulation.
  * npm for mangaging project dependencies.
  * Webpack and babel to bundle and transpile the source JavaScript Code.

## Implementation Timeline
  * Friday Afternoon & Weekend: Built card, hand, and deck classes and objects along with corresponding DOMs for user interactivity.
  * Monday: Implemented game logic for winning rounds, along with quality of life improvements to cards.
  * Tuesday: Built A.I. and corresponding classes and game logic.
  * Wednesday: Allowed for multiple rounds to be played and implemented game win logics.
  * Thursday Morning: Deploy onto GitHub Pages along with polishing user interface and experience.


## Future Implementations:
  * Improve A.I. to be more human like and play more predicatable cards.

## CC Licensing:
  * Personal link icons and modal icons provided by [Font Awesome](https://fontawesome.com/)
  * Favicon from [Central Davidson High School logo](https://www.highschoolot.com/content/image/5258959/)
  * Gong sound effect from [Ryan Lloyd](https://www.youtube.com/watch?v=kZ70uUp9eWo)
  * Background music from [Leonidas Succession](https://www.youtube.com/watch?v=F63cjnBRNo8&t=26s) by [Chulainn](https://www.youtube.com/c/CharlesChulainn)
  * Background image from [Assassin's Creed Odyssey](https://www.ubisoft.com/en-us/game/assassins-creed/odyssey)
  * Achilles image from [Wargod]https://www.facebook.com/legendofthecryptids/)
  * Aphrodite image from [Miranda by Thomas Francis Dicksee](https://artvee.com/dl/miranda-3/)
  * Ares image from [Ares Miaiphonos by GENZOMAN](https://www.deviantart.com/genzoman/art/Ares-Miaiphonos-135998313)
  * Arion image from Georg Simon Winter von Adlersflügel
  * Athena image from [bachzim](https://www.deviantart.com/bachzim/art/Athena-899463203)
  * Cereberus and Theseus image from [Hades](https://www.supergiantgames.com/games/hades/)
  * Chiron image from [Smite](https://www.smitegame.com/)
  * Echo image from Echo and Narcissus by John William Waterhouse
  * Er image from Ananke by Platone
  * Eurydice image from Wounded Eurydice by Jean-Baptiste-Camille Corot
  * Hades image from [Aleksandra Jędrasik](https://www.artstation.com/artwork/X9VxR)
  * Helen image from Helon of Troy by Evelyn De Morgan
  * Hephaestus image from [Mykhailo Kryvtsov](https://www.artstation.com/artwork/LaLmP)
  * Hera and Porphyrion from [Rick Riordan](https://rickriordan.com/)
  * Heracles image from [The God of High School](https://www.webtoons.com/en/action/the-god-of-high-school/list?title_no=66&page=1)
  * Narcissus image from Narcissus by Michelangelo Merisi da Caravaggio
  * Paris image from Paris in the Phrygian Cap by Antoni Brodowski
  * Persephone image from [eloizz_art](https://twitter.com/eloizz_art/status/1387433361015193600?lang=ga)
  * Triton image from The Little Mermaid by Disney
