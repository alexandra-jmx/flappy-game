export default class LoadingScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'PreGameScene'
        })
    }
 
    

    preload() {

        const scenario = {
            width: 144,
            background: {
                day: 'background-day'
                //night: 'background-night'
            }, 
            ground: 'ground-sprite',
            obstacle: {
                pipe: {
                    green: {
                        top: 'pipe-green-top',
                        bottom: 'pipe-green-bottom'
                    }//, red: {top: 'pipe-red-top', bottom: 'pipe-red-bottom'}
                }
            }
        }
        
        
        // Load the scenario
        // - Day
        //this.load.image('background-day', './assets/background-day.png');
        this.load.image(scenario.background.day, './assets/background-day.png');
        
        // - Night
        //this.load.image(scenario.background.night, 'assets/background-night.png');

        // - Ground (Usado Sprite para o chão em função da animação)
        /*this.load.spritesheet(scenario.ground, '.assets/ground-sprite.png' 
            { frameWidth: 336,
            frameHeight: 112 }
         Também não dá certo senhor jesus cristo   )*/
    }
    
        create() {
        backgroundDay = this.add.image(144, 256, 'background-day');
        //backgroundDay = this.add.image(scenario.width, 256, 'background-day'); //Assim fica tudo preto

        //backgroundNight
        //ground = this.add.sprite(scenario.width, 458, 'ground-sprite');
        /*ground.setCollideWorldBounds(true)
        ground.setDepth(10)
            */

    
        }
    
        update() {
    
        }

}