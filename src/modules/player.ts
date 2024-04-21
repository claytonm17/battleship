import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";

class Player {
    name: string;
    gameboard: Gameboard;
    isComputer: boolean;

    constructor(name: string, isComputer?: boolean) {
        this.name = name;
        this.isComputer = isComputer || false;
        this.gameboard = new Gameboard();
    }

    attack(coordinates: number[], target: Player) {
        target.gameboard.receiveAttack(coordinates);
        // Add condition if recieve null to redo
    }

    createCarrier(origin: [number, number], direction: string) {
        const ship = new Ship(1, 5, origin, direction);
        if (this.gameboard.placeShip(ship) === null) {
            // loop until no longer an issue?
        } else {
            this.gameboard.placeShip(ship);
        }
    }

    createBattleship(origin: [number, number], direction: string) {
        const ship = new Ship(2, 4, origin, direction);
        if (this.gameboard.placeShip(ship) === null) {
            // loop until no longer an issue?
        } else {
            this.gameboard.placeShip(ship);
        }
    }

    createSubmarine(origin: [number, number], direction: string) {
        const ship = new Ship(3, 3, origin, direction);
        if (this.gameboard.placeShip(ship) === null) {
            // loop until no longer an issue?
        } else {
            this.gameboard.placeShip(ship);
        }
    }

    createDestroyer(origin: [number, number], direction: string) {
        const ship = new Ship(4, 3, origin, direction);
        if (this.gameboard.placeShip(ship) === null) {
            // loop until no longer an issue?
        } else {
            this.gameboard.placeShip(ship);
        }
    }

    createCruiser(origin: [number, number], direction: string) {
        const ship = new Ship(5, 2, origin, direction);
        if (this.gameboard.placeShip(ship) === null) {
            // loop until no longer an issue?
        } else {
            this.gameboard.placeShip(ship);
        }
    }
}

export default Player;