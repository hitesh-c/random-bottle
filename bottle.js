let config = {
    type: Phaser.CANVAS,
    width : 9*40,
    height : 16*40,

    scene : {

        preload : preload,        //before start of game
        create : create,
        update : update,

    }
};

let game = new Phaser.Game(config);

function preload(){         //called only once
    
    console.log(this);
    this.load.image('bg','Assets/wooden.jpg');
    this.load.image('spin','Assets/bottle-removebg-preview.png');
    this.load.audio('audio', 'Assets/Audio.mp3');


};

function create(){
    let W = game.config.width;
    let H = game.config.height;
    this.audio = this.sound.add('audio');
    this.add.sprite(W/2,H/2,'bg');
    this.spin = this.add.sprite(W/2,H/2,'spin');
    this.spin.setScale(0.8);
    this.input.on("pointerdown",spinwheel,this);           
};

function update(){
        console.log("updating");                
};

function spinwheel(){
    let audio=this.audio;
    audio.totalDuration=5.5;
    //audio.fadeOut=1000;
    audio.play();
    let rounds = Phaser.Math.Between(2,6);
    let degrees = Phaser.Math.Between(0,11)*30;
    let ta = rounds*360 + degrees;

    tween = this.tweens.add({
        targets: this.spin,
        angle:ta,
        duration:6500,
        ease: "Cubic.easeOut",
       // scaleX:0.5,
        //scaleY:0.5,
        // onComplete: audio.stop()
    })

    
}

