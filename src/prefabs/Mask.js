//mask prehabs
class Mask extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, pointValue){
        super(scene, x, y, texture)

        scene.add.existing(this);  //add object to existing, displayList, updateList
        this.points = pointValue;
    }

    update(){
        //move mask left
        this.x -= game.settings.initialSpeed;

        //wraparound screen bounds
        if(this.x <= 0 - this.width){
            this.x = game.config.width + game.rnd.integerInRange(550, 1000);
        }
    }   
    
    //reset mask
    reset(){
        this.x = game.config.width + game.rnd.integerInRange(550, 1200);
    }
}