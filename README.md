# Olympus Card-Jitsu

## Live Link
https://jzhou45.github.io/Olympus-Card-Jitsu/

## Background
### Club Penguin Card-Jitsu
Card-Jitsu is a mini-game that was first introduced in the formerly popular MMORPG, Club Penguin, in November of 2008, with the introduction of ninjas and the Dojo to servers. The card game follows a simple gameplay premise, where players would have decks with cards of three different types, that follow the classic Rock-Paper-Scissors structure, where 1 type would beat another, but lose to the other. The cards would also contain a number value and color associated with it for additional gameplay mechanics, along with cards with special effect that changes the rules of the round it's played in.

Each round of Card-Jitsu, would require each player to play 1 card at the same time. The player with the strong type would win the round, e.g. Water beats Fire in Card-Jitsu or Rock beats Scissors in Rock-Paper-Scissors. If both cards are of the same element, the card with the higher number value would win, otherwise the round will end in a tie.

After each round ends, the player would collect a token with the type and color of the card they won with. In order to win the game, a player would need to collect 3 tokens are different types or 3 tokens of the same type with different colors.

### Olympus Card-Jitsu
Olympus Card-Jitsu aims to make a faithful adapatation to the core Card-Jitsu gameplay with new classes and cards based on Greek mythology and lore. In order to keep the game a client-side project, the opponenet will be a simple A.I., rather than an opposing player.

## Wireframe
![alt text](./wireframe.png)
The wireframe above displays the framework of the core game screen where:
  * Users are able to view their hand and remaining time on the bottom of the screen.
  * When time runs or when user and A.I. has chosen their cards, they will both display on the board, represented by user sprites in the above wireframe.
  * The top left represents all the cards the user has won with in the form of tokens or sprites, whereas the top right represents the A.I.'s.


## Functionality & MVPs
In Olympus Card-Jitsu, players will be able to:
  * Select against 2 different A.I. opponents
  * Start new games with a shuffled deck
  * Select and play cards from their hand
  * See the current game state and points of both player and A.I.
  
In addition, this project will include:
  * Instructions on type matchups and rules of the game
  * Audio and visual cues to the end of rounds and games
  * Background music
  

## Technologies, Libraries, APIs
Olympus Card-Jitsu will be made with Vanilla JavaScript through DOM Manipulation.

## Implementation Timeline
  * Friday Afternoon & Weekend: Develop game logic and functionality, along with simple A.I.
  * Monday: Make HTML shell and set up DOM Manipulation
  * Tuesday: Create decks for users and A.I. along with art associated with it, along with starting JavaScript and CSS animations
  * Wednesday: Finish up animations and quality of life updates
  * Thursday Morning: Deploy onto Github Pages

## Bonus Features:
  * Add Power Up Cards
  * Allow users to view deck list
  * Allow users to build deck
  * Allow users to explore more Greek lore and mythology through deck list
  * Smarter A.I.s
