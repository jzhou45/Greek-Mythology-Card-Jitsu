function Tally(player){
    this.points = [];
    this.player = player;
    this.monster = {};
    this.hero = {};
    this.god = {};
}

Tally.prototype.type = function(i){
    return this.points[i].type;
}

Tally.prototype.color = function(i){
    return this.points[i].color;
}

Tally.prototype.win = function(){
    const monsterLen = Object.keys(this.monster).length;
    const heroLen = Object.keys(this.hero).length;
    const godLen = Object.keys(this.god).length;
    if (monsterLen >= 3 || heroLen >= 3 || godLen >= 3) return true;
    if (monsterLen >= 1 && heroLen >= 1 && godLen >= 1){
        if (this.uniq().length >= 3) return true;
    }
    return false;
}

Tally.prototype.uniq = function(){
    const arr = [];
    const monsterVals = Object.keys(this.monster);
    const heroVals = Object.keys(this.hero);
    const godVals = Object.keys(this.god);
    for (let i = 0; i < monsterVals.length; i++){
        if (!arr.includes(monsterVals[i])) arr.push[monsterVals[i]];
    }
    for (let j = 0; j < heroVals.length; j++){
        if (!arr.includes(heroVals[j])) arr.push(heroVals[j]);
    }
    for (let k = 0; k < godVals.length; k++){ 
        if (!arr.includes(godVals[k])) arr.push(godVals[k]);
    }
    return arr;
}

Tally.prototype.append = function(){
    const card = this.points[this.num()];
    const color = card.color;
    const type = card.type;
    if (type === "monster"){
        this.monster[color] = "placeholderLMAOxD";
    } else if (type==="hero"){
        this.hero[color] = "placeholderLMAOxD";
    } else{
        this.god[color] = "placeholderLMAOxD";
    }
}

Tally.prototype.num = function(){
    return this.points.length - 1;
}

export default Tally;