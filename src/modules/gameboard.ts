import Ship from "./ship";

class Gameboard {

    board : boolean[][] = Array.from({ length : 10}, () => Array(10).fill(false))

    placeShip(
        length : number,
        origin : [number, number],
        ) {
            const battleship = new Ship(length, origin);
            
        }

    receiveAttack(x : number, y : number) {
        // X and Y from top left corner
    }
}

export default Gameboard