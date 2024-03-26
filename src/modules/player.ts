import Gameboard from "./gameboard";

class Player {

    board: Gameboard;
    name: string;

    constructor(name: string, board: Gameboard) {
        this.board = board;
        this.name = name;
    }

    manualAttack(x: number, y: number) {
        return [x, y];
    }

    // Change to separate list
    randomAttack(): [number, number] {
        do {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        const coordinates = `${x},${y}`;

        if (!this.board.attackedSpots.includes(coordinates)) {
            this.board.attackedSpots.push(coordinates);
            return [x, y];
        }
    } while(true);
    }
}

export default Player;