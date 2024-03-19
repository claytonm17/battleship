import Gameboard from "./gameboard";

const playerBoard = new Gameboard
console.log(playerBoard.board)
playerBoard.receiveAttack(5,2)
console.log(playerBoard.board)