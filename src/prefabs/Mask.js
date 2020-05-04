//mask prehabs
class Mask extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, velocity) {
        // call Phaser Physics Sprite constructor
        super(scene, game.config.width, Phaser.Math.Between(80, 370), 'mask'); 
        // set up physics sprite
        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);       // add physics body
        this.setVelocityX(velocity);            // make it go!
        this.setImmovable();                    
        this.newMask = true;                    // custom property to control barrier spawning
        this.pick = false;                      // pick for new mask
        this.score = 5;
        this.hp = 1;
    }

    update() {
        // override physics sprite update()
        super.update();

        // add new mask when existing mask is picked
        if(!this.newMask && this.pick) {
            this.newMask = true;
            // call parent scene method from this context
            this.scene.addMask(this.parent, this.velocity);
        }

        // eliminate mask if it reaches the left edge of the screen
        if(this.x < -this.width) {
            this.destroy();
        }
    }   
}