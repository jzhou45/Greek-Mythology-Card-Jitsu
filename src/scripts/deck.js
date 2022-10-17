import Card from "./card.js"

const poseidon = new Card("Poseidon", "god", "9", "#A7C7E7", "src/assets/poseidon.png");
const triton = new Card("Triton", "god", "4", "#A7C7E7", "src/assets/triton.png");
const proteus = new Card("Proteus", "god", "1", "#A7C7E7", "src/assets/proteus.jpeg");
const orion = new Card("Orion", "hero", "5", "#A7C7E7", "src/assets/orion.jpeg");
const theseus = new Card("Theseus", "hero", "7", "#A7C7E7", "src/assets/theseus.webp");
const bellerophon = new Card("Bellerophon", "hero", "3", "#A7C7E7", "src/assets/bellerophon.jpeg");
const minotaur = new Card("Minotaur", "monster", "9", "#A7C7E7", "src/assets/minotaur.png");
const pegasus = new Card("Pegasus", "monster", "10", "#A7C7E7", "src/assets/pegasus.png");
const arion = new Card("Arion", "monster", "1", "#A7C7E7", "src/assets/arion.jpeg");

const zeus = new Card("Zeus", "god", "10", "#FDFD96", "src/assets/zeus.jpeg");
const athena = new Card("Athena", "god", "7", "#FDFD96", "src/assets/athena.jpeg")
const aphrodite = new Card("Aphrodite", "god", "6", "#FDFD96", "src/assets/aphrodite.webp");
const heracles = new Card("Heracles", "hero", "10", "#FDFD96", "src/assets/heracles.webp");
const achilles = new Card("Achilles", "hero", "9", "#FDFD96", "src/assets/achilles.webp");
const helen = new Card("Helen", "hero", "6", "#FDFD96", "src/assets/helen.webp");
const medusa = new Card("Medusa", "monster", "8", "#FDFD96", "src/assets/medusa.jpeg");
const hydra = new Card("Hydra", "monster", "7", "#FDFD96", "src/assets/hydra.webp");
const chiron = new Card("Chiron", "monster", "5", "#FDFD96", "src/assets/chiron.webp")

const hades = new Card("Hades", "god", "8", "#ABB0B8", "src/assets/hades.jpeg");
const persephone = new Card("Persephone", "god", "5", "#ABB0B8", "src/assets/persephone.jpeg");
const plutus = new Card("Plutus", "god", "2", "#ABB0B8", "src/assets/plutus.jpeg");
const orpheus = new Card("Orpheus", "hero", "4", "#ABB0B8", "src/assets/orpheus.webp");
const eurydice = new Card("Eurydice", "hero", "2", "#ABB0B8", "src/assets/eurydice.jpg");
const er = new Card("Er", "hero", "1", "#ABB0B8", "src/assets/er.jpeg");
const cereberus = new Card("Cereberus", "monster", "6", "#ABB0B8", "src/assets/cereberus.webp");
const charon = new Card("Charon", "monster", "2", "#ABB0B8", "src/assets/charon.jpeg");
const typhon = new Card("Typhon", "monster", "4", "#ABB0B8", "src/assets/typhon.jpeg");

const hera = new Card("Hera", "god", "9", "#F8C8DC", "src/assets/hera.webp");
const ares = new Card("Ares", "god", "10", "#F8C8DC", "src/assets/ares.webp");
const hephaestus = new Card("Hephaestus", "god", "2", "#F8C8DC", "src/assets/hephaestus.jpeg");
const narcissus = new Card("Narcissus", "hero", "7", "#F8C8DC", "src/assets/narcissus.webp");
const paris = new Card("Paris", "hero", "6", "#F8C8DC", "src/assets/paris.jpeg");
const jason = new Card("Jason", "hero", "4", "#F8C8DC", "src/assets/jason.jpeg");
const echo = new Card("Echo", "monster", "7", "#F8C8DC", "src/assets/echo.jpeg");
const porphyrion = new Card("Porphyrion", "monster", "2", "#F8C8DC", "src/assets/porphyrion.webp");
const echidna = new Card("Echidna", "monster", "3", "#F8C8DC", "src/assets/echidna.jpeg");

class Deck{
    constructor(){
        this.cards = [poseidon, orion, theseus, bellerophon, triton, proteus, minotaur, pegasus, arion,
            zeus, athena, aphrodite, heracles, achilles, helen, medusa, hydra, chiron,
            hades, persephone, plutus, orpheus, eurydice, er, cereberus, charon, typhon,
            hera, ares, hephaestus, narcissus, paris, jason, echo, porphyrion, echidna
        ];
        this.shuffle();
    };

    shuffle(){
        for (let i = 0; i < this.cards.length; i++){
            const randomIndex = i + Math.floor(Math.random() * this.cards.length % (this.cards.length - i));
            [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
        };
        return this.cards;
    };

    draw(){
        return this.cards.pop();
    };
};

export default Deck;