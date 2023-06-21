import PreGameScene from './scene_pre-game.js';
import GameScene from './scene_game.js';

//Configurações 
const configurations = {
    type: Phaser.AUTO,
    width: 288,
    height: 512,
    parent: 'flappy-game',
    physics: {
        default: 'arcade', 
        arcade: {
            gravity: {
                y: 300 // testar qual seria mais adequada para uma criança hehe
            },
            debug: true
        }
    },
    scene: [
        PreGameScene,
        GameScene
    ]
}

const game = new Phaser.Game(configurations);
//Variáveis scenario
let backgroundDay;
let backgroundNight;
let ground;
