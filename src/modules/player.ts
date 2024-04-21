import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";

class Player {

    gameboard: Gameboard;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.gameboard = new Gameboard;
    }

    attack(coordinates: number[], target: Player) {
        target.gameboard.receiveAttack(coordinates);
    }

     
}

export default Player;