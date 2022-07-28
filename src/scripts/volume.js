function Volume(){
    this.on = true;
    this.battleSong = document.querySelector("#battle-song");
    this.load();
}

Volume.prototype.load = function(){
    const sound = document.getElementById("volume");
    sound.addEventListener("click", this.playOrPause);

    const img = document.createElement("img");
    img.src = "src/assets/volume.png";
    sound.appendChild(img);
    this.battleSong.play();
}

Volume.prototype.playOrPause = function(){
    if (this.on){
        this.play();
    } else{
        this.pause();
    }
}

Volume.prototype.play = function(){
    const sound = document.getElementById("volume");
    sound.children[0].src = "src/assets/volume.png";
    this.battleSong.play();
}

Volume.prototype.stop = function(){
    const sound = document.getElementById("volume");
    sound.children[0].src = "src/assets/mute.png";
    this.battleSong.pause();
    this.battleSong.currentTime = 0;
}

export default Volume;