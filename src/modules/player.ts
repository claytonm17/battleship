import Gameboard from "./gameboard";

class Player {

    board: Gameboard;
    name: string;

    constructor(name: string) {
        this.board = new Gameboard;
        this.name = name;
    }

    manualAttack(x: number, y: number) {
        return [x, y];
    }

    randomAttack() {
        // Add check for previous spots
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        return [x, y];
    }

}

export default Player;