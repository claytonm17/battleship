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
        do {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        const coordinates = `${x},${y}`;
        if (!this.board.attackedSpots.includes(coordinates)) {
            this.board.attackedSpots.push(`${x},${y}`);
            return [x, y];
        }
    } while(true);
    }
}

export default Player;