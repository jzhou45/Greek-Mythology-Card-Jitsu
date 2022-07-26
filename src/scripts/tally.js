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

Tally.prototype.winTypes = function(i){
    let points = {"monster": 0, "god": 0, "hero": 0};
    for (let i of points){
        if (points.monster >= 1 && points.god >= 1 && points.hero >= 1){
            return this.player;
        }
        if (i.type === "monster"){
            points["monster"]++;
        } else if (i.type === "god"){
            points["god"]++;
        } else {
            points["hero"]++
        }
    }
    return false;
}