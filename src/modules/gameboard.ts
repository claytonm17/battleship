import Ship from "./ship";

class Gameboard {

    board : boolean[][] = Array.from({ length : 10}, () => Array(10).fill(false))

    placeShip(
        length : number,
        origin : [number, number],  // Y, X ?
        xRotated : boolean, // TRUE = X-axis, FALSE = Y-axis
        ) {
            const battleship = new Ship(length, origin, xRotated);
            
            this.board[origin[0]][origin[1]] = true;

            if (xRotated) {
                for (let i = 0; i < length; i++) {
                    this.board[origin[0]][origin[1] + i] = true
                }
            } else {
                for (let i = 0; i < length; i++) {
                    this.board[origin[0] + i][origin[1]] = true
                }
            }

            //return this.board[0];
        }

    receiveAttack(x : number, y : number) {
        // X and Y from top left corner
    }
}

export default Gameboard