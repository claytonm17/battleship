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
console.log(p1.board);

// add in randomizer for locations
const p2carrier = p2.board.placeShip(5, [0, 0], true);
const p2battleship = p2.board.placeShip(4, [0, 1], true);
const p2destroyer = p2.board.placeShip(3, [0, 2], true);
const p2submarine = p2.board.placeShip(3, [0, 3], true);
const p2patrol = p2.board.placeShip(2, [0, 4], true);
console.log(p2.board)

// MAIN GAME LOOP
for (let i = 0; i < 20; i++){
    // P1 attack on p2
    let p1attack = p1.randomAttack();
    p2.board.receiveAttack(p1attack[0], p1attack[1]);
    console.log(p2)

    // P2 attack on p1
    let p2attack = p2.randomAttack();
    p1.board.receiveAttack(p2attack[0], p2attack[1])
    console.log(p1)
}