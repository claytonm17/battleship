import Gameboard from "./gameboard";
import Player from "./player";

// Inputs needed from player
const name: string = "Human";

// Ships input
const carrierOrigin: [number, number] = [2, 2];
const carrierIsOnX: boolean = true

const battleshipOrigin: [number, number] = [0, 0];
const battleshipIsOnX: boolean = true

const destroyerOrigin: [number, number] = [9, 4];
const destroyerIsOnX: boolean = false

const submarineOrigin: [number, number] = [5, 5];
const submarineIsOnX: boolean = false

const patrolOrigin: [number, number] = [8, 9];
const patrolIsOnX: boolean = true

// Create game loop
const p1board = new Gameboard;
const p2board = new Gameboard;

const p1 = new Player(name, p1board);
const p2 = new Player('Computer', p2board);

// Place ships with input
const p1carrier = p1.board.placeShip(5, carrierOrigin, carrierIsOnX);
const p1battleship = p1.board.placeShip(4, battleshipOrigin, battleshipIsOnX);
const p1destroyer = p1.board.placeShip(3, destroyerOrigin, destroyerIsOnX);
const p1submarine = p1.board.placeShip(3, submarineOrigin, submarineIsOnX);
const p1patrol = p1.board.placeShip(2, patrolOrigin, patrolIsOnX);
//console.log(p1.board);

// add in randomizer for locations
const p2carrier = p2.board.placeShip(5, [0, 0], true);
const p2battleship = p2.board.placeShip(4, [0, 1], true);
const p2destroyer = p2.board.placeShip(3, [0, 2], true);
const p2submarine = p2.board.placeShip(3, [0, 3], true);
const p2patrol = p2.board.placeShip(2, [0, 4], true);
//console.log(p2.board)

// MAIN GAME LOOP
for (let i = 0; i < 100; i++){
    // P1 attack on p2
    let p1attack = p1.randomAttack();
    p2.board.receiveAttack(p1attack[0], p1attack[1]);
    if (p2.board.ships[0].sunk === true) {
        console.log(`${p1.name}'s carrier was sunk`)
    }

    // P2 attack on p1
    let p2attack = p2.randomAttack();
    p1.board.receiveAttack(p2attack[0], p2attack[1])
}
//console.log(p1.board.attackedSpots)
//console.log(p2.board.attackedSpots)

function shipSunkCheck(player, index: number): number {
    // index 0 = carrier, 1 = battleship, 2 = destroyer, 3 = submarine, 4 = patrol
    let sunkShips = 0;
    return sunkShips;
}

function gameWinCondition() { //check
    let p1sunkShips = 0;
    let p2sunkShips = 0;
    for (let i = 0; i < p1.board.ships.length; i++) {
        if (p1.board.ships[i].getSunkStatus()) {
            p1sunkShips += 1;
        }
        if (p2.board.ships[i].getSunkStatus()) {
            p2sunkShips += 1;
        }
    }
    if (p1sunkShips === 5) {
        console.log("P2 Wins!");
        return "P2 Win";
    }
    if (p2sunkShips === 5) {
        console.log("P1 Wins!");
        return "P1 Win";
    }
}

function parseCoordinates(coordinates: string): number[] {
    // Ex) A1 => [0, 0] or B2 => [1, 1]
    let coor: number[] = [];
    let spot: string[] = coordinates.split("");

    // Letters = Y axis
    if (spot[0] === "A") coor[1] = 0;
    if (spot[0] === "B") coor[1] = 1;
    if (spot[0] === "C") coor[1] = 2;
    if (spot[0] === "D") coor[1] = 3;
    if (spot[0] === "E") coor[1] = 4;
    if (spot[0] === "F") coor[1] = 5;
    if (spot[0] === "G") coor[1] = 6;
    if (spot[0] === "H") coor[1] = 7;
    if (spot[0] === "I") coor[1] = 8;
    if (spot[0] === "J") coor[1] = 9;

    // Number = X axis
    if (spot[1] === '1') coor[0] = 0;
    if (spot[1] === '2') coor[0] = 1;
    if (spot[1] === '3') coor[0] = 2;
    if (spot[1] === '4') coor[0] = 3;
    if (spot[1] === '5') coor[0] = 4;
    if (spot[1] === '6') coor[0] = 5;
    if (spot[1] === '7') coor[0] = 6;
    if (spot[1] === '8') coor[0] = 7;
    if (spot[1] === '9') coor[0] = 8;
    if (spot.length === 3) coor[0] = 9;

    return coor;
}

export default parseCoordinates;