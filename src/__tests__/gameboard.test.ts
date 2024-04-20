import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

test("10 x 10 board empty by default", () => {
    const board = new Gameboard;
    expect(board.board).toStrictEqual(
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    )
});

test("Be able to place ship on board origin 0,0 vertically", () => {
    const carrier = new Ship(1, 5, [0,0], "V");
    const board = new Gameboard
    board.placeShip(carrier);
    expect(board.board).toStrictEqual(
        [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    )
});

test("Be able to place ship on board origin 1,1 horizontally wiht different ID", () => {
    const carrier = new Ship(2, 4, [1,1], "H");
    const board = new Gameboard
    board.placeShip(carrier);
    expect(board.board).toStrictEqual(
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    )
});

test("Be able to place ship on board origin 5,1 horizontally wiht different ID", () => {
    const carrier = new Ship(5, 2, [5,1], "H");
    const board = new Gameboard
    board.placeShip(carrier);
    expect(board.board).toStrictEqual(
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    )
});

test("Be able to attack a spot and miss", () => {
    const carrier = new Ship(2, 4, [1,1], "H");
    const board = new Gameboard;
    board.placeShip(carrier);
    board.receiveAttack([1, 2]);
    expect(board.board).toStrictEqual( // -1 to indicate attacked spot
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 0, 0, 0, 0, 0],
            [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    )
})

test("When ships are added to the board, expect the ships list to contain them", () => {
    const board = new Gameboard
    const carrier = new Ship(1, 5, [0,0], "H");
    const battleship = new Ship(2, 4, [0,1], "H");
    const submarine = new Ship(3, 3, [0,2], "H");
    const cruiser = new Ship(4, 3, [0,3], "H");
    const destroyer = new Ship(5, 2, [0,4], "H");
    board.placeShip(carrier);
    board.placeShip(battleship);
    board.placeShip(submarine);
    board.placeShip(cruiser);
    //board.placeShip(destroyer);
    expect(board.ships.length).toBe(4)
});

test("Can add all 5 ships", () => {
    const board = new Gameboard
    const carrier = new Ship(1, 5, [0,0], "H");
    const battleship = new Ship(2, 4, [0,1], "H");
    const submarine = new Ship(3, 3, [0,2], "H");
    const cruiser = new Ship(4, 3, [0,3], "H");
    const destroyer = new Ship(5, 2, [0,4], "H");
    board.placeShip(carrier);
    board.placeShip(battleship);
    board.placeShip(submarine);
    board.placeShip(cruiser);
    board.placeShip(destroyer);
    expect(board.board).toStrictEqual(
        [
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
            [3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [4, 4, 4, 0, 0, 0, 0, 0, 0, 0],
            [5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    )
});