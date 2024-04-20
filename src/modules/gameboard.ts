import Ship from "./ship";

class Gameboard {
    
    board: number[][] = Array.from({ length : 10}, () => Array(10).fill(0))
    ships: Ship[] = [];

    placeShip(ship: Ship) {

        if (ship.direction === "V") {
            
            for (let i = 0; i < ship.length; i++) {
                // Add check to confirm no other ship in spot
                if (this.board[ship.origin[1] + i][ship.origin[0]] !== 0) {
                    return null
                }
                this.board[ship.origin[1] + i][ship.origin[0]] = ship.id;
            }
            this.ships.push(ship);
        } 
        else if (ship.direction === "H") {

            for (let i = 0; i < ship.length; i++) {
                if (this.board[ship.origin[1] + i][ship.origin[0]] !== 0) {
                    return null
                }
                this.board[ship.origin[1]][ship.origin[0] + i] = ship.id;
            }
            this.ships.push(ship);
        }
    }

    receiveAttack(coordinates: number[]) { // [X, Y] from top left corner
        
        const ATTACKED = -1
        const EMPTY = 0
    // Check if spot is not occupied
        if (this.board[coordinates[1]][coordinates[0]] === ATTACKED){
            return null // cannot attack same spot twice
        }
        else if (this.board[coordinates[1]][coordinates[0]] !== EMPTY) {
            // Hit a ship
            this.board[coordinates[1]][coordinates[0]] = ATTACKED;
            return true
        }
        else { // Miss
            this.board[coordinates[1]][coordinates[0]] = ATTACKED;
            return false
        }
    }
}

export default Gameboard;