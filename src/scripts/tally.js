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

Tally.prototype.winTypes = function(){
    let points = {"monster": 0, "god": 0, "hero": 0};
    for (let i of points){
        if (i.type === "monster"){
            points["monster"]++;
        } else if (i.type === "god"){
            points["god"]++;
        } else {
            points["hero"]++
        }
        if (points.monster >= 1 && points.god >= 1 && points.hero >= 1){
            return true;
        }
    }
    return false;
}

Tally.prototype.winColors = function(){
    let points = {"monster": [], "god": [], "hero": []};
    for (let i of points){
        if (i.type === "monster" && !points.monster.includes(i.color)){
            points["monster"].push(i.color);
        } else if (i.type === "hero" && !points.hero.includes(i.color)){
            points["hero"].push(i.color);
        } else if (i.type === "god" && !points.god.includes(i.color)){
            points["god"].push(i.color);
        }
        if (points.monster >= 1 && points.god >= 1 && points.hero >= 1){
            return true;
        }
    }
    return false;
}

Tally.prototype.win = function(){
    if (this.winTypes()) return true;
    if (this.winColors()) return true;
    return false;
}