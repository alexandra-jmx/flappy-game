
//Configurações 
const configurations = {
    type: Phaser.AUTO,
    width: 288,
    height: 512,
    physics: {
        default: 'arcade', 
        arcade: {
            gravity: {
                y: 300
            },
            debug: true
        }
    },
    scene: [
        PreGameScene,
        GameScene
    ]
}
