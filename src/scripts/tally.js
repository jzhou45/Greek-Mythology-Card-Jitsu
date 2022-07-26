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

Tally.prototype.win = function(){
    let points = {"monster": [], "god": [], "hero": []};
    for (let i of this.points){
        if (i.type === "monster" && !points.monster.includes(i.color)){
            points["monster"].push(i.color);
        } else if (i.type === "hero" && !points.hero.includes(i.color)){
            points["hero"].push(i.color);
        } else if (i.type === "god" && !points.god.includes(i.color)){
            points["god"].push(i.color);
        }
        if (points.monster.length >= 3 || points.god.length >= 3 || points.hero.length >= 3){
            return true;
        }
        if (points.monster.length >= 1 && points.god.length >= 1 && points.hero.length >=1 && points.monster.concat(points.god.concat(points.hero)).filter(onlyUnique) >= 3){
            return true
        }
    }
    return false;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

export default Tally;