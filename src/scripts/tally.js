function Tally(player){
    this.points = [];
    this.player = player;
}

Tally.prototype.type = function(i){
    return this.points[i].type;
}

Tally.prototype.color = function(i){
    return this.points[i].color;
}

// Tally.prototype.winGame = function(){
//     let points = {"god": [], "monster": [], "hero": [],};
//     for (let i = 0; i < this.points.length; i++){
//         if this.
//     }
// }