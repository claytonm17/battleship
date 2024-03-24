import Ship from "./ship";

class Gameboard {

    board : boolean[][] = Array.from({ length : 10}, () => Array(10).fill(false))
    ships : Ship[] = [];

    attackedSpots: string[];

    constructor() {
        this.attackedSpots = []
    }

    // Fix the scope of these variables
    missedAttacks: number[][] = [];
    hitAttacks: number[][] = [];

    placeShip(
        length : number,
        origin : [number, number],  // X, Y
        xRotated : boolean, // TRUE = X-axis, FALSE = Y-axis
        ) {
            const newShip = new Ship(length, origin, xRotated); // hits = 0 and not sunk by default
            this.ships.push(newShip);

            this.board[origin[1]][origin[0]] = true;

            if (xRotated) { 
                for (let i = 0; i < length; i++) {
                    this.board[origin[1]][origin[0] + i] = true;
                }
            } else {
                for (let i = 0; i < length; i++) {
                    this.board[origin[1] + i][origin[0]] = true;
                }
            }

            //return this.board[0];
        }

    receiveAttack(x : number, y : number): boolean | null {
        const attackCoordinates: string = JSON.stringify([x, y]);
        if (this.attackedSpots.includes(attackCoordinates)) {
            return null; // Cannot attack same spot twice
        }
        this.attackedSpots.push(attackCoordinates);  // Keep track of attacked spots
        //console.log(this.attackedSpots);
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].isHit(x, y)) {
                this.ships[i].hit();
                this.hitAttacks.push([x, y]);
                return true;
            }
        }
        this.missedAttacks.push([x,y]);
        return false;
    }
}

export default Gameboard