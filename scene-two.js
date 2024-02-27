var SceneTwo = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneTwo" });
    },
    init: function(data) {
        this.message = data.message;
        
    },
    preload: function() {
        
        this.load.image("brasao", "brasao.png")
        this.load.image("lucas", "lucas.png")
        
    },
    create: function() {


        this.add.image(640, 200, 'lucas').setScale(0.5)
        this.add.image(580, 300, 'brasao').setScale(0.1)
        
        var text = this.add.text(
            640, 
            600, 
            this.message, 
            {
                fontSize: 50,
                color: "#000000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);
        
        
    },
    update: function() {}
});